import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../../../generated/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    // Get the current date and time
    const now = new Date();

    // Delete all performances where performanceTime is in the past
    const deletedPerformances = await prisma.performance.deleteMany({
      where: {
        performanceTime: {
          lt: now
        }
      }
    });

    return NextResponse.json({
      success: true,
      message: `Удалено ${deletedPerformances.count} прошедших спектаклей`,
      deletedCount: deletedPerformances.count
    });
  } catch (error: any) {
    console.error('Error cleaning up performances:', error);
    return NextResponse.json(
      { error: error.message || 'Ошибка при очистке спектаклей' },
      { status: 500 }
    );
  }
} 