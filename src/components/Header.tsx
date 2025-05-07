'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const [user, setUser] = useState<{ name: string; role: string } | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('user');
      if (userData) {
        try {
          setUser(JSON.parse(userData));
        } catch {
          setUser(null);
        }
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  const scrollToPerformances = () => {
    if (pathname === '/') {
      const performancesSection = document.getElementById('performances');
      if (performancesSection) {
        performancesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push('/#performances');
    }
  };

  const getUserStatus = () => {
    if (!user) return 'Гость';
    if (user.role === 'ADMIN') return 'Администратор';
    return 'Пользователь';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-amber-500">Театр</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={scrollToPerformances}
              className="text-gray-300 hover:text-amber-500 transition-colors"
            >
              Спектакли
            </button>
            <Link
              href="/help"
              className="text-gray-300 hover:text-amber-500 transition-colors"
            >
              Справка
            </Link>
            {user && (
              <Link
                href="/profile"
                className="text-gray-300 hover:text-amber-500 transition-colors"
              >
                Профиль
              </Link>
            )}
            {user?.role === 'ADMIN' && (
              <Link
                href="/profile"
                className="text-gray-300 hover:text-amber-500 transition-colors"
              >
                Админ Панель
              </Link>
            )}
          </nav>

          {/* Auth Buttons and Status */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${
                !user ? 'bg-gray-400' : 
                user.role === 'ADMIN' ? 'bg-green-500' : 'bg-blue-500'
              }`} />
              <span className="text-sm text-gray-400">{getUserStatus()}</span>
            </div>
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-300">Привет, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Выйти
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  Войти
                </Link>
                <Link
                  href="/register"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Регистрация
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
} 