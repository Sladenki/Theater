'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';

// Временные данные о зале
const hallData = {
  rows: 15,
  seatsPerRow: 20,
  priceZones: [
    { name: 'VIP', price: 5000, color: 'bg-amber-500', rows: [1, 2] },
    { name: 'Партер', price: 3000, color: 'bg-blue-500', rows: [3, 4, 5, 6] },
    { name: 'Бельэтаж', price: 2000, color: 'bg-green-500', rows: [7, 8, 9, 10] },
    { name: 'Балкон', price: 1000, color: 'bg-purple-500', rows: [11, 12, 13, 14, 15] },
  ],
  // Временные данные о занятых местах
  occupiedSeats: [
    { row: 1, seat: 5 },
    { row: 1, seat: 6 },
    { row: 2, seat: 10 },
    { row: 3, seat: 15 },
    { row: 4, seat: 3 },
    { row: 5, seat: 7 },
    { row: 6, seat: 12 },
    { row: 7, seat: 8 },
    { row: 8, seat: 4 },
    { row: 9, seat: 9 },
    { row: 10, seat: 11 },
    { row: 11, seat: 6 },
    { row: 12, seat: 13 },
    { row: 13, seat: 2 },
    { row: 14, seat: 7 },
    { row: 15, seat: 10 },
  ],
};

export default function SeatSelectionPage() {
  const params = useParams();
  const { id } = params;
  const [selectedSeats, setSelectedSeats] = useState<{ row: number; seat: number }[]>([]);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);

  const isSeatOccupied = (row: number, seat: number) => {
    return hallData.occupiedSeats.some(s => s.row === row && s.seat === seat);
  };

  const isSeatSelected = (row: number, seat: number) => {
    return selectedSeats.some(s => s.row === row && s.seat === seat);
  };

  const getSeatPrice = (row: number) => {
    const zone = hallData.priceZones.find(zone => zone.rows.includes(row));
    return zone ? zone.price : 0;
  };

  const toggleSeat = (row: number, seat: number) => {
    if (isSeatOccupied(row, seat)) return;

    setSelectedSeats(prev => {
      const isSelected = prev.some(s => s.row === row && s.seat === seat);
      if (isSelected) {
        return prev.filter(s => !(s.row === row && s.seat === seat));
      } else {
        return [...prev, { row, seat }];
      }
    });
  };

  const getTotalPrice = () => {
    return selectedSeats.reduce((total, seat) => total + getSeatPrice(seat.row), 0);
  };

  const handlePayment = () => {
    setShowPaymentPopup(true);
  };

  const handleConfirmPayment = () => {
    // Здесь можно добавить логику для обработки оплаты
    alert('Оплата подтверждена!');
    setShowPaymentPopup(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Выбор мест</h1>

        {/* Легенда */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          {hallData.priceZones.map((zone, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className={`w-4 h-4 ${zone.color} rounded`}></div>
              <span>{zone.name} - {zone.price} ₽</span>
            </div>
          ))}
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-600 rounded"></div>
            <span>Занято</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-amber-600 rounded"></div>
            <span>Выбрано</span>
          </div>
        </div>

        {/* План зала */}
        <div className="mb-8">
          <div className="bg-gray-800 p-4 rounded-lg">
            {/* Сцена */}
            <div className="bg-gray-700 h-16 rounded-t-lg mb-8 flex items-center justify-center">
              <span className="text-xl font-bold">СЦЕНА</span>
            </div>

            {/* Места */}
            <div className="space-y-2">
              {Array.from({ length: hallData.rows }, (_, rowIndex) => (
                <div key={rowIndex} className="flex justify-center space-x-2">
                  {Array.from({ length: hallData.seatsPerRow }, (_, seatIndex) => {
                    const row = rowIndex + 1;
                    const seat = seatIndex + 1;
                    const isOccupied = isSeatOccupied(row, seat);
                    const isSelected = isSeatSelected(row, seat);
                    const zone = hallData.priceZones.find(z => z.rows.includes(row));

                    return (
                      <button
                        key={seatIndex}
                        onClick={() => toggleSeat(row, seat)}
                        disabled={isOccupied}
                        className={`
                          w-8 h-8 rounded
                          ${isOccupied ? 'bg-gray-600 cursor-not-allowed' : ''}
                          ${isSelected ? 'bg-amber-600' : ''}
                          ${!isOccupied && !isSelected ? zone?.color || 'bg-gray-700' : ''}
                          hover:opacity-80 transition-opacity
                        `}
                        title={`Ряд ${row}, Место ${seat} - ${getSeatPrice(row)} ₽`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Выбранные места и итоговая сумма */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Выбранные места</h2>
          {selectedSeats.length > 0 ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedSeats.map((seat, index) => (
                  <div key={index} className="bg-gray-700 p-4 rounded flex items-center justify-between">
                    <div>
                      <p>Ряд {seat.row}, Место {seat.seat}</p>
                      <p className="text-amber-400">{getSeatPrice(seat.row)} ₽</p>
                    </div>
                    <button
                      onClick={() =>
                        setSelectedSeats(prev =>
                          prev.filter(s => !(s.row === seat.row && s.seat === seat.seat))
                        )
                      }
                      className="ml-4 text-gray-400 hover:text-red-500 transition-colors"
                      aria-label="Удалить место"
                      type="button"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-700 pt-4">
                <p className="text-xl font-bold">
                  Итого: {getTotalPrice()} ₽
                </p>
              </div>
              <button
                onClick={handlePayment}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
              >
                Перейти к оплате
              </button>
            </div>
          ) : (
            <p className="text-gray-400">Выберите места в зале</p>
          )}
        </div>
      </div>

      {/* PopUp окно для подтверждения оплаты */}
      {showPaymentPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Подтверждение оплаты</h2>
            <div className="space-y-4">
              {selectedSeats.map((seat, index) => (
                <div key={index} className="bg-gray-700 p-4 rounded">
                  <p>Ряд {seat.row}, Место {seat.seat}</p>
                  <p className="text-amber-400">{getSeatPrice(seat.row)} ₽</p>
                </div>
              ))}
              <div className="border-t border-gray-700 pt-4">
                <p className="text-xl font-bold">
                  Итого: {getTotalPrice()} ₽
                </p>
              </div>
              <button
                onClick={handleConfirmPayment}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
              >
                Подтвердить оплату
              </button>
              <button
                onClick={() => setShowPaymentPopup(false)}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 mt-2"
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}