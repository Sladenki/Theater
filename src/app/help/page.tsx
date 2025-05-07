'use client';

import React from 'react';

const HelpPage = () => {
  const userCapabilities = {
    guest: {
      title: 'Гость',
      capabilities: [
        'Просмотр публичных выступлений',
        'Просмотр расписания выступлений',
        'Регистрация в системе',
        'Вход в систему'
      ]
    },
    user: {
      title: 'Пользователь',
      capabilities: [
        'Все возможности гостя',
        'Создание и управление своими выступлениями',
        'Редактирование профиля',
        'Просмотр своих выступлений',
        'Управление расписанием своих выступлений',
        'Просмотр статистики своих выступлений'
      ]
    },
    admin: {
      title: 'Администратор',
      capabilities: [
        'Все возможности пользователя',
        'Управление всеми выступлениями',
        'Управление пользователями',
        'Модерация контента',
        'Управление системными настройками',
        'Просмотр общей статистики',
        'Управление категориями выступлений'
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
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>{capability}</span>
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