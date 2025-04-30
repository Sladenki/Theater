import { NextRequest, NextResponse } from 'next/server'
import { hash } from 'bcryptjs'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  const { email, password, name, role } = await req.json()
  const hashedPassword = await hash(password, 10)
  const user = await prisma.user.create({
    data: { email, password: hashedPassword, name, role: role || 'USER' }
  })
  return NextResponse.json({ id: user.id, email: user.email, role: user.role })
}