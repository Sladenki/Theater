import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../../../generated/client';

const prisma = new PrismaClient();

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const ticketId = parseInt(params.id, 10);
    
    if (isNaN(ticketId)) {
      return NextResponse.json(
        { error: 'Неверный формат ID билета' },
        { status: 400 }
      );
    }

    // Находим билет
    const ticket = await prisma.ticket.findUnique({
      where: { id: ticketId },
      include: { performance: true }
    });

    if (!ticket) {
      return NextResponse.json(
        { error: 'Билет не найден' },
        { status: 404 }
      );
    }

    // Проверяем, не прошел ли уже спектакль
    if (new Date(ticket.performance.performanceTime) < new Date()) {
      return NextResponse.json(
        { error: 'Нельзя сдать билет на прошедший спектакль' },
        { status: 400 }
      );
    }

    // Используем транзакцию для атомарного удаления билета и освобождения места
    await prisma.$transaction(async (tx) => {
      // Удаляем билет
      await tx.ticket.delete({
        where: { id: ticketId }
      });

      // Удаляем запись о занятом месте
      await tx.occupiedSeat.deleteMany({
        where: {
          performanceId: ticket.performanceId,
          row: ticket.row,
          seat: ticket.seat
        }
      });
    });

    return NextResponse.json({
      success: true,
      message: 'Билет успешно сдан'
    });
  } catch (error: any) {
    console.error('Error returning ticket:', error);
    return NextResponse.json(
      { error: error.message || 'Ошибка при сдаче билета' },
      { status: 500 }
    );
  }
} 