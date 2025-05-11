'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Ticket {
  id: number;
  performance: {
    title: string;
    performanceTime: string;
    image: string;
  };
  seatNumber: number;
  price: number;
}

export default function TicketsPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTickets = async () => {
    try {
      const response = await fetch('/api/tickets');
      if (!response.ok) throw new Error('Ошибка загрузки билетов');
      const data = await response.json();
      setTickets(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleReturnTicket = async (ticketId: number) => {
    if (!confirm('Вы уверены, что хотите сдать этот билет?')) return;

    try {
      const response = await fetch(`/api/tickets/${ticketId}/return`, {
        method: 'POST',
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Ошибка при сдаче билета');
      }

      // Обновляем список билетов после успешной сдачи
      await fetchTickets();
    } catch (err: any) {
      alert(err.message);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-white">Загрузка...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  }

  if (tickets.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Мои билеты</h1>
          <p className="text-gray-400 mb-8">У вас пока нет билетов</p>
          <Link
            href="/#performances"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-xl transition duration-300"
          >
            Купить билеты
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Мои билеты</h1>
        <div className="space-y-6">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-gray-800/50 rounded-xl overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-1/3">
                <img
                  src={ticket.performance.image}
                  alt={ticket.performance.title}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1">
                <h2 className="text-2xl font-bold mb-2">{ticket.performance.title}</h2>
                <div className="space-y-2 text-gray-300 mb-4">
                  <p>Дата: {formatDate(ticket.performance.performanceTime)}</p>
                  <p>Время: {formatTime(ticket.performance.performanceTime)}</p>
                  <p>Место, ряд: {ticket.seat}, {ticket.row}</p>
                  <p>Цена: {ticket.price} ₽</p>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleReturnTicket(ticket.id)}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                  >
                    Сдать билет
                  </button>
                  <Link
                    href={`/performance/${ticket.performance.id}`}
                    className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 