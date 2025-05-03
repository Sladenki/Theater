import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../../../generated/client';

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const performanceId = parseInt(params.id, 10);
    
    if (isNaN(performanceId)) {
      return NextResponse.json(
        { error: 'Неверный формат ID' },
        { status: 400 }
      );
    }

    const occupiedSeats = await prisma.occupiedSeat.findMany({
      where: {
        performanceId
      },
      select: {
        row: true,
        seat: true
      }
    });

    return NextResponse.json(occupiedSeats);
  } catch (error: any) {
    console.error('Error fetching occupied seats:', error);
    return NextResponse.json(
      { error: error.message || 'Ошибка сервера' },
      { status: 500 }
    );
  }
} 