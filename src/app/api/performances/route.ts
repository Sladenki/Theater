import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET() {
  const performances = await prisma.performance.findMany()
  return NextResponse.json(performances)
}