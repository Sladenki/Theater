'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Временные данные о спектакле
// const performanceData = {
//   id: '1',
//   title: 'Гамлет',
//   author: 'Уильям Шекспир',
//   description: 'Классическая трагедия о датском принце, который мстит за убийство своего отца. Один из самых известных и значимых произведений мировой литературы.',
//   duration: '3 часа 30 минут',
//   ageRestriction: '16+',
//   cast: [
//     { role: 'Гамлет', actor: 'Иван Петров' },
//     { role: 'Офелия', actor: 'Мария Иванова' },
//     { role: 'Клавдий', actor: 'Алексей Смирнов' },
//     { role: 'Гертруда', actor: 'Елена Козлова' },
//   ],
//   director: 'Андрей Васильев',
//   date: '15 марта 2024',
//   time: '19:00',
//   image: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
// };

export default function PerformancePage() {
  const params = useParams();
  const { id } = params;
  const [performanceData, setPerformanceData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);
    fetch(`/api/performances/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Ошибка загрузки данных');
        return res.json();
      })
      .then(setPerformanceData)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-white">Загрузка...</div>;
  }

  if (error || !performanceData) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error || 'Данные не найдены'}</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${performanceData.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        
        <div className="relative h-full flex items-end">
          <div className="max-w-6xl mx-auto px-4 py-12 w-full">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{performanceData.title}</h1>
            <p className="text-xl md:text-2xl text-amber-400 mb-6">{performanceData.author}</p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-800/50 px-4 py-2 rounded-full">
                <span className="text-amber-400">Дата:</span> {performanceData.date || '-'}
              </div>
              <div className="bg-gray-800/50 px-4 py-2 rounded-full">
                <span className="text-amber-400">Время:</span> {performanceData.time || '-'}
              </div>
              <div className="bg-gray-800/50 px-4 py-2 rounded-full">
                <span className="text-amber-400">Продолжительность:</span> {performanceData.duration || '-'}
              </div>
              <div className="bg-gray-800/50 px-4 py-2 rounded-full">
                <span className="text-amber-400">Возраст:</span> {performanceData.ageRestriction || '-'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">О спектакле</h2>
              <p className="text-gray-300 leading-relaxed">{performanceData.description}</p>
            </div>

            {/* Каст может отсутствовать в БД, поэтому проверяем */}
            {performanceData.cast && Array.isArray(performanceData.cast) && (
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">В ролях</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {performanceData.cast.map((member: any, index: number) => (
                    <div key={index} className="bg-gray-700/50 p-4 rounded-lg">
                      <p className="text-amber-400 font-semibold">{member.role}</p>
                      <p className="text-gray-300">{member.actor}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Режиссер</h2>
              <p className="text-gray-300">{performanceData.director || '-'}</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Цены на билеты</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">VIP</span>
                  <span className="text-amber-400 font-bold">5000 ₽</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Партер</span>
                  <span className="text-amber-400 font-bold">3000 ₽</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Бельэтаж</span>
                  <span className="text-amber-400 font-bold">2000 ₽</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Балкон</span>
                  <span className="text-amber-400 font-bold">1000 ₽</span>
                </div>
              </div>
            </div>

            <Link
              href={`/performance/${id}/seats`}
              className="block w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-6 rounded-xl text-center transition duration-300 transform hover:scale-105"
            >
              Выбрать места
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 