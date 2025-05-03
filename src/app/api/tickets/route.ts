import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/client';

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const userId = new URL(req.url).searchParams.get('userId');
    if (!userId) {
      return NextResponse.json({ error: 'Необходим ID пользователя' }, { status: 401 });
    }

    const tickets = await prisma.ticket.findMany({
      where: {
        userId: parseInt(userId, 10)
      },
      include: {
        performance: {
          select: {
            title: true,
            author: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(tickets);
  } catch (error: any) {
    console.error('Error fetching tickets:', error);
    return NextResponse.json(
      { error: error.message || 'Ошибка сервера' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { performanceId, seats, userId } = await req.json();

    if (!performanceId || !seats || !Array.isArray(seats) || !userId) {
      return NextResponse.json({ error: 'Неверные данные' }, { status: 400 });
    }

    // Создаем билеты и отмечаем места как занятые
    const tickets = await prisma.$transaction(async (tx) => {
      // Создаем билеты
      const createdTickets = await Promise.all(
        seats.map((seat) =>
          tx.ticket.create({
            data: {
              userId: parseInt(userId, 10),
              performanceId,
              row: seat.row,
              seat: seat.seat,
              price: seat.price,
            },
          })
        )
      );

      // Отмечаем места как занятые
      await Promise.all(
        seats.map((seat) =>
          tx.occupiedSeat.create({
            data: {
              performanceId,
              row: seat.row,
              seat: seat.seat,
            },
          })
        )
      );

      return createdTickets;
    });

    return NextResponse.json(tickets, { status: 201 });
  } catch (error: any) {
    console.error('Error creating tickets:', error);
    return NextResponse.json(
      { error: error.message || 'Ошибка сервера' },
      { status: 500 }
    );
  }
} 