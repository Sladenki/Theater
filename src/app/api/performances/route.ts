import { NextResponse, NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET() {
  const performances = await prisma.performance.findMany()
  return NextResponse.json(performances)
}

export async function POST(req: NextRequest) {
  try {
    const { title, author, description, image } = await req.json()
    if (!title || !author || !description || !image) {
      return NextResponse.json({ error: 'Все поля обязательны' }, { status: 400 })
    }
    const performance = await prisma.performance.create({
      data: { title, author, description, image }
    })
    return NextResponse.json(performance, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Ошибка сервера' }, { status: 500 })
  }
}