import Link from 'next/link';

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

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
            Калининградский Драматический Театр
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
            Добро пожаловать в мир театрального искусства, где каждая постановка - это уникальное путешествие
          </p>
          
          {/* Login Button */}
          <Link
            href="/login"
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
          >
            Войти
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Наши преимущества
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Богатая история</h3>
              <p className="text-gray-300">
                Более 70 лет на сцене. Мы гордимся нашей историей и традициями
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Разнообразный репертуар</h3>
              <p className="text-gray-300">
                Классические и современные постановки для всех возрастов
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Профессиональная труппа</h3>
              <p className="text-gray-300">
                Талантливые актеры и режиссеры с богатым опытом
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Current Productions */}
      <div className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Текущие постановки
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {performances.map((performance) => (
              <div key={performance.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={performance.image}
                  alt={performance.title}
                  className="w-full h-48 object-cover"
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Калининградский Драматический Театр. Все права защищены.
          </p>
        </div>
      </footer>
    </main>
  );
} 