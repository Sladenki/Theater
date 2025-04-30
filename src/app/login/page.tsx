'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        const data = await res.json();
        console.log('data', data)
        localStorage.setItem("user", JSON.stringify({ name: data.name, email: data.email, role: data.role }));
        alert('Вход выполнен!');
        window.location.href = '/';
      } else {
        const data = await res.json();
        alert(data.error || 'Ошибка авторизации');
      }
    } catch (err) {
      alert('Ошибка сети');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Вход в систему</h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded bg-gray-800 text-white"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-2 rounded bg-gray-800 text-white"
          required
        />
        <button
          type="submit"
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded transition"
        >
          Войти
        </button>
        <p className="mt-4 text-center text-gray-400">
          Нет аккаунта?{' '}
          <Link href="/register" className="text-amber-400 hover:underline">
            Зарегистрироваться
          </Link>
        </p>
      </form>
    </main>
  );
}