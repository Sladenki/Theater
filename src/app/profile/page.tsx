'use client';

import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState<{ name: string, role?: string } | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("user");
      if (userData) {
        try {
          setUser(JSON.parse(userData));
        } catch {
          setUser(null);
        }
      }
    }
  }, []);

  const handleAddPerformance = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const author = (form.elements.namedItem("author") as HTMLInputElement).value;
    const description = (form.elements.namedItem("description") as HTMLTextAreaElement).value;
    const image = (form.elements.namedItem("image") as HTMLInputElement).value;

    try {
      const res = await fetch('/api/performances', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, author, description, image }),
      });
      if (res.ok) {
        alert('Мероприятие успешно добавлено!');
        form.reset();
      } else {
        const data = await res.json();
        alert(data.error || 'Ошибка при добавлении мероприятия');
      }
    } catch (err) {
      alert('Ошибка сети');
    }
  };

  if (!user) {
    return <div className="text-center mt-10">Пожалуйста, войдите в систему.</div>;
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-6">Личный кабинет ({user.name})</h1>
      {user.role === "ADMIN" && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-bold mb-4 text-center">Добавить мероприятие</h2>
          <form onSubmit={handleAddPerformance}>
            <input
              type="text"
              name="title"
              placeholder="Название"
              className="w-full mb-4 px-4 py-2 rounded bg-gray-700 text-white"
              required
            />
            <input
              type="text"
              name="author"
              placeholder="Автор"
              className="w-full mb-4 px-4 py-2 rounded bg-gray-700 text-white"
              required
            />
            <textarea
              name="description"
              placeholder="Описание"
              className="w-full mb-4 px-4 py-2 rounded bg-gray-700 text-white"
              required
            />
            <input
              type="text"
              name="image"
              placeholder="Ссылка на изображение"
              className="w-full mb-4 px-4 py-2 rounded bg-gray-700 text-white"
              required
            />
            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded transition"
            >
              Добавить
            </button>
          </form>
        </div>
      )}
    </main>
  );
}