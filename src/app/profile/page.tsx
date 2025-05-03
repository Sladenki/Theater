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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tickets.map(ticket => (
                <div key={ticket.id} className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">{ticket.performance.title}</h3>
                  <p className="text-amber-400 mb-2">{ticket.performance.author}</p>
                  <p>Ряд: {ticket.row}</p>
                  <p>Место: {ticket.seat}</p>
                  <p className="text-amber-400 font-bold mt-2">{ticket.price} ₽</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Куплен: {new Date(ticket.createdAt).toLocaleDateString()}
                  </p>
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