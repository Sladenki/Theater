'use client';

import { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [form, setForm] = useState({ email: "", password: "", name: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        alert('Регистрация успешна!');
        window.location.href = '/login';
      } else {
        const data = await res.json();
        alert(data.error || 'Ошибка регистрации');
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
        <h1 className="text-3xl font-bold mb-6 text-center">Регистрация</h1>
        <input
          type="text"
          name="name"
          placeholder="Имя"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded bg-gray-800 text-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded bg-gray-800 text-white"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-6 px-4 py-2 rounded bg-gray-800 text-white"
          required
        />
        <button
          type="submit"
          className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded transition"
        >
          Зарегистрироваться
        </button>
        <p className="mt-4 text-center text-gray-400">
          Уже есть аккаунт?{" "}
          <Link href="/login" className="text-amber-400 hover:underline">
            Войти
          </Link>
        </p>
      </form>
    </main>
  );
}