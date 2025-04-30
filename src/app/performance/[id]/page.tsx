'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

// Временные данные о спектакле
const performanceData = {
  id: '1',
  title: 'Гамлет',
  author: 'Уильям Шекспир',
  description: 'Классическая трагедия о датском принце, который мстит за убийство своего отца. Один из самых известных и значимых произведений мировой литературы.',
  duration: '3 часа 30 минут',
  ageRestriction: '16+',
  cast: [
    { role: 'Гамлет', actor: 'Иван Петров' },
    { role: 'Офелия', actor: 'Мария Иванова' },
    { role: 'Клавдий', actor: 'Алексей Смирнов' },
    { role: 'Гертруда', actor: 'Елена Козлова' },
  ],
  director: 'Андрей Васильев',
  date: '15 марта 2024',
  time: '19:00',
  image: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
};

export default function PerformancePage() {
  const params = useParams();
  const { id } = params;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Изображение спектакля */}
          <div className="relative h-96 md:h-[600px] rounded-lg overflow-hidden">
            <img
              src={performanceData.image}
              alt={performanceData.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Информация о спектакле */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">{performanceData.title}</h1>
            <p className="text-xl text-amber-400">{performanceData.author}</p>
            
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-semibold mb-2">О спектакле</h2>
                <p className="text-gray-300">{performanceData.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400">Продолжительность</p>
                  <p className="text-lg">{performanceData.duration}</p>
                </div>
                <div>
                  <p className="text-gray-400">Возрастное ограничение</p>
                  <p className="text-lg">{performanceData.ageRestriction}</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2">Дата и время</h2>
                <p className="text-xl">{performanceData.date}, {performanceData.time}</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2">Режиссер</h2>
                <p className="text-lg">{performanceData.director}</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2">В ролях</h2>
                <ul className="space-y-2">
                  {performanceData.cast.map((member, index) => (
                    <li key={index} className="text-gray-300">
                      <span className="text-amber-400">{member.role}</span> - {member.actor}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href={`/performance/${id}/seats`}
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
            >
              Выбрать места
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 