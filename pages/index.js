import { useState } from 'react';
import Image from 'next/image';
import BottomNav from '../components/BottomNav';

export default function Home() {
  const [result, setResult] = useState(null);

  const prizes = [
    { amount: 0.2, chance: 50 },
    { amount: 0.4, chance: 25 },
    { amount: 0.5, chance: 15 },
    { amount: 3, chance: 6 },
    { amount: 7, chance: 0.1 },
    { amount: 10, chance: 0.01 },
    { amount: 20, chance: 0.01 },
    { amount: 30, chance: 0.05 },
    { amount: 45, chance: 0.005 },
    { amount: 65, chance: 0.005 },
    { amount: 85, chance: 0.005 },
    { amount: 100, chance: 0.005 },
  ];

  const rollPrize = () => {
    const roll = Math.random() * 100;
    let cumulative = 0;

    for (let prize of prizes) {
      cumulative += prize.chance;
      if (roll <= cumulative) {
        setResult(prize.amount);
        return;
      }
    }

    setResult(prizes[0].amount);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-between pb-20">
      <div className="pt-10">
        <h1 className="text-xl font-semibold text-center mb-2">Case: TON Balance</h1>
        <div className="w-40 h-40 relative mx-auto">
          <Image src="/ton-case.png" alt="TON Case" layout="fill" objectFit="contain" />
        </div>
        {result !== null && (
          <p className="text-center text-lg mt-4 text-green-400">
            🎉 You won {result} TON!
          </p>
        )}
        <div className="mt-6 flex justify-center">
          <button
            onClick={rollPrize}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition"
          >
            Open
          </button>
        </div>
      </div>

      <BottomNav active="cases" />
    </div>
  );
}

<Image
  src="https://i.ibb.co/4J8GpLz/ton-case.png"
  alt="TON Case"
  layout="fill"
  objectFit="contain"
/>
