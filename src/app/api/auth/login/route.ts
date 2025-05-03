import { NextRequest, NextResponse } from 'next/server'
import { compare } from 'bcryptjs'
import { PrismaClient } from '../../../../generated/client'
const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user || !(await compare(password, user.password))) {
      return NextResponse.json({ error: 'Неверные данные' }, { status: 401 })
    }
    // Здесь можно добавить JWT или сессию
    return NextResponse.json({ id: user.id, email: user.email, name: user.name, role: user.role })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Server error' }, { status: 500 })
  }
}