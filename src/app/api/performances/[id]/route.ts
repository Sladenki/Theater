import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

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

    const performance = await prisma.performance.findUnique({
      where: {
        id: performanceId
      }
    })

    if (!performance) {
      return NextResponse.json(
        { error: 'Представление не найдено' },
        { status: 404 }
      )
    }

    return NextResponse.json(performance)
  } catch (error: any) {
    console.error('Error fetching performance:', error);
    return NextResponse.json(
      { error: error.message || 'Ошибка сервера' },
      { status: 500 }
    )
  }
} 