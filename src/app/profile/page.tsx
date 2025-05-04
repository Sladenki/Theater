'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Ticket {
  id: number;
  row: number;
  seat: number;
  price: number;
  createdAt: string;
  performance: {
    title: string;
    author: string;
  };
}

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<{ id: number; email: string; name: string; role: string } | null>(null);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newPerformance, setNewPerformance] = useState({
    title: '',
    author: '',
    description: '',
    image: ''
  });

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
      return;
    }
    const parsedUser = JSON.parse(userData);
    setUser(parsedUser);

    setLoading(true);
    setError(null);
    fetch(`/api/tickets?userId=${parsedUser.id}`)
      .then(res => {
        if (!res.ok) throw new Error('Ошибка загрузки билетов');
        return res.json();
      })
      .then(setTickets)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [router]);

  const handleCreatePerformance = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/performances', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPerformance),
      });
      if (res.ok) {
        alert('Спектакль успешно создан!');
        setNewPerformance({ title: '', author: '', description: '', image: '' });
      } else {
        const data = await res.json();
        alert(data.error || 'Ошибка создания спектакля');
      }
    } catch (err) {
      alert('Ошибка сети');
    }
  };

  if (!user) {
    return null;
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Загрузка...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Личный кабинет</h1>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4">Информация о пользователе</h2>
          <p>Email: {user.email}</p>
          <p>Имя: {user.name}</p>
          <p>Роль: {user.role}</p>
        </div>

        {user.role === 'ADMIN' && (
          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">Создать новый спектакль</h2>
            <form onSubmit={handleCreatePerformance} className="space-y-4">
              <input
                type="text"
                placeholder="Название спектакля"
                value={newPerformance.title}
                onChange={(e) => setNewPerformance({ ...newPerformance, title: e.target.value })}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                required
              />
              <input
                type="text"
                placeholder="Автор"
                value={newPerformance.author}
                onChange={(e) => setNewPerformance({ ...newPerformance, author: e.target.value })}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                required
              />
              <textarea
                placeholder="Описание"
                value={newPerformance.description}
                onChange={(e) => setNewPerformance({ ...newPerformance, description: e.target.value })}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                required
              />
              <input
                type="text"
                placeholder="URL изображения"
                value={newPerformance.image}
                onChange={(e) => setNewPerformance({ ...newPerformance, image: e.target.value })}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                required
              />
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded transition"
              >
                Создать спектакль
              </button>
            </form>
          </div>
        )}

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Мои билеты</h2>
          {tickets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tickets.map(ticket => (
                <div key={ticket.id} className="relative">
                  {/* Основной билет */}
                  <div className="bg-gradient-to-br from-amber-600 to-amber-700 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
                    {/* Верхняя часть билета */}
                    <div className="border-b border-amber-400/30 pb-4 mb-4">
                      <h3 className="text-xl font-bold text-white mb-2">{ticket.performance.title}</h3>
                      <p className="text-amber-100">{ticket.performance.author}</p>
                    </div>

                    {/* Информация о месте */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-amber-500/20 p-3 rounded-lg">
                        <p className="text-amber-100 text-sm">Ряд</p>
                        <p className="text-white font-bold text-lg">{ticket.row}</p>
                      </div>
                      <div className="bg-amber-500/20 p-3 rounded-lg">
                        <p className="text-amber-100 text-sm">Место</p>
                        <p className="text-white font-bold text-lg">{ticket.seat}</p>
                      </div>
                    </div>

                    {/* Цена */}
                    <div className="bg-amber-500/20 p-3 rounded-lg mb-4">
                      <p className="text-amber-100 text-sm">Стоимость</p>
                      <p className="text-white font-bold text-xl">{ticket.price} ₽</p>
                    </div>

                    {/* Дата покупки */}
                    <div className="text-amber-100 text-sm">
                      Куплен: {new Date(ticket.createdAt).toLocaleDateString('ru-RU', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </div>

                    {/* Перфорация */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-900 rounded-full" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-900 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">У вас пока нет купленных билетов</p>
          )}
        </div>
      </div>
    </main>
  );
}