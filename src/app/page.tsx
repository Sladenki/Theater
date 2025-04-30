'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Временные данные о спектаклях (позже будут приходить с сервера)
const performances = [
  {
    id: 1,
    title: 'Гамлет',
    author: 'Уильям Шекспир',
    description: 'Классическая трагедия о датском принце',
    image: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 2,
    title: 'Вишневый сад',
    author: 'Антон Чехов',
    description: 'Классическая пьеса о судьбе дворянской усадьбы',
    image: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: 3,
    title: 'Ревизор',
    author: 'Николай Гоголь',
    description: 'Комедия о чиновниках и мнимом ревизоре',
    image: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
];

// Анимации
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
};

import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<{ name: string } | null>(null);

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

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
        />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center flex flex-col items-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              variants={fadeInUp}
            >
              Калининградский Драматический Театр
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-center mb-8 max-w-2xl"
              variants={fadeInUp}
            >
              Добро пожаловать в мир театрального искусства, где каждая постановка - это уникальное путешествие
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              {user ? (
                <div className="flex items-center justify-center space-x-4">
                  <span className="bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-lg inline-block">
                    Вы авторизованы, как - {user.name}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ml-2"
                  >
                    Выйти
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 inline-block"
                >
                  Войти
                </Link>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <motion.div 
        className="py-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Наши преимущества
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-4">Богатая история</h3>
              <p className="text-gray-300">
                Более 70 лет на сцене. Мы гордимся нашей историей и традициями
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-4">Разнообразный репертуар</h3>
              <p className="text-gray-300">
                Классические и современные постановки для всех возрастов
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-4">Профессиональная труппа</h3>
              <p className="text-gray-300">
                Талантливые актеры и режиссеры с богатым опытом
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Current Productions */}
      <motion.div 
        className="py-20 px-4 bg-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Текущие постановки
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {performances.map((performance, index) => (
              <motion.div 
                key={performance.id}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                custom={index}
              >
                <motion.img 
                  src={performance.image}
                  alt={performance.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{performance.title}</h3>
                  <p className="text-amber-400 mb-2">{performance.author}</p>
                  <p className="text-gray-300 mb-4">{performance.description}</p>
                  <Link
                    href={`/performance/${performance.id}`}
                    className="inline-block bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-full transition duration-300"
                  >
                    Купить билеты
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer 
        className="bg-gray-900 py-8 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Калининградский Драматический Театр. Все права защищены.
          </p>
        </div>
      </motion.footer>
    </main>
  );
}