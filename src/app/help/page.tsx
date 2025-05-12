'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const HelpPage = () => {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (role: string, index: number) => {
    const key = `${role}-${index}`;
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const userCapabilities = {
    guest: {
      title: 'Гость',
      capabilities: [
        {
          title: 'Просмотр списка спектаклей',
          description: 'Доступ к полному каталогу спектаклей с возможностью фильтрации и поиска.',
          link: '/#performances'
        },
        {
          title: 'Просмотр подробной информации о спектакле',
          description: 'Информация о дате, времени, месте проведения, актерах и сюжете спектакля.',
          link: '/performance/1'
        },
        {
          title: 'Регистрация в системе',
          description: 'Создание нового аккаунта для получения расширенных возможностей.',
          link: '/register'
        },
        {
          title: 'Вход в систему',
          description: 'Авторизация в системе для доступа к личному кабинету.',
          link: '/login'
        }
      ]
    },
    user: {
      title: 'Пользователь',
      capabilities: [
        {
          title: 'Все возможности гостя',
          description: 'Полный доступ ко всем базовым функциям системы.',
          link: null
        },
        {
          title: 'Просмотр своего профиля',
          description: 'Управление личными данными и настройками аккаунта.',
          link: '/profile'
        },
        {
          title: 'Просмотр списка купленных билетов',
          description: 'История покупок и информация о текущих билетах.',
          link: '/tickets'
        },
        {
          title: 'Возможность сдачи купленных билетов',
          description: 'Возврат билетов в соответствии с правилами театра.',
          link: '/tickets'
        },
        {
          title: 'Покупка билетов на спектакли',
          description: 'Выбор мест и оформление заказа на билеты.',
          link: '/performance/1/seats'
        }
      ]
    },
    admin: {
      title: 'Администратор',
      capabilities: [
        {
          title: 'Все возможности пользователя',
          description: 'Полный доступ ко всем функциям обычного пользователя.',
          link: null
        },
        {
          title: 'Создание спектаклей',
          description: 'Добавление новых спектаклей в систему, управление расписанием.',
          link: '/profile'
        }
      ]
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Справка по возможностям системы</h1>
      
      <div className="grid gap-8 md:grid-cols-3">
        {Object.entries(userCapabilities).map(([role, data]) => (
          <div key={role} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">{data.title}</h2>
            <ul className="space-y-3">
              {data.capabilities.map((capability, index) => (
                <li key={index} className="border-b border-gray-200 pb-3">
                  <button
                    onClick={() => toggleItem(role, index)}
                    className="w-full flex items-center justify-between text-left hover:text-blue-600 transition-colors"
                  >
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>{capability.title}</span>
                    </div>
                    <span className="text-gray-400">
                      {expandedItems[`${role}-${index}`] ? '▼' : '▶'}
                    </span>
                  </button>
                  {expandedItems[`${role}-${index}`] && (
                    <div className="mt-2 pl-6 text-gray-600">
                      <p className="mb-2">{capability.description}</p>
                      {capability.link && (
                        <Link 
                          href={capability.link}
                          className="text-blue-500 hover:text-blue-700 text-sm"
                        >
                          Перейти →
                        </Link>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Как получить доступ к расширенным возможностям?</h2>
        <p className="mb-4">
          Для получения доступа к расширенным возможностям системы необходимо зарегистрироваться и войти в свой аккаунт.
          После этого вы получите доступ к базовым возможностям пользователя.
        </p>
        <p>
          Для получения прав администратора, пожалуйста, свяжитесь с технической поддержкой системы.
        </p>
      </div>
    </div>
  );
};

export default HelpPage; 