import { useEffect, useState } from 'react';
import Image from 'next/image';
import BottomNav from '../components/BottomNav';

const prizes = [
  { amount: '0.2 TON', chance: 50 },
  { amount: '0.4 TON', chance: 25 },
  { amount: '0.5 TON', chance: 15 },
  { amount: '3 TON', chance: 6 },
  { amount: '7 TON', chance: 0.1 },
  { amount: '10 TON', chance: 0.01 },
  { amount: '20 TON', chance: 0.01 },
  { amount: '30 TON', chance: 0.05 },
  { amount: '45 TON', chance: 0.005 },
  { amount: '65 TON', chance: 0.005 },
  { amount: '85 TON', chance: 0.005 },
  { amount: '100 TON', chance: 0.005 }
];

// реальный выбор приза по шансам
function getRandomPrize() {
  const expanded = prizes.flatMap(prize =>
    Array(Math.round(prize.chance * 100)).fill(prize)
  );
  return expanded[Math.floor(Math.random() * expanded.length)];
}

export default function OpenCase() {
  const [spinning, setSpinning] = useState(true);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const prize = getRandomPrize();
      setResult(prize);
      setSpinning(false);
    }, 3000); // 3 сек прокрутки

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-between pb-20 px-4 pt-10">
      <h1 className="text-2xl font-semibold mb-4">🎰 Крутка...</h1>

      {spinning ? (
        <div className="animate-spin w-32 h-32 relative mb-6">
          <Image
            src="https://i.ibb.co/ZKGr5J4/ton-coin.png"
            alt="TON Coin"
            layout="fill"
            objectFit="contain"
          />
        </div>
      ) : (
        <>
          <div className="w-32 h-32 relative mb-6">
            <Image
              src="https://i.ibb.co/ZKGr5J4/ton-coin.png"
              alt="Prize"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h2 className="text-xl">Выпало: <span className="text-blue-400 font-bold">{result.amount}</span></h2>
        </>
      )}

      <BottomNav active="cases" />
    </div>
  );
}
