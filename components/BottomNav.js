import Link from 'next/link';
import { useRouter } from 'next/router';

export default function BottomNav({ active }) {
  const router = useRouter();

  const tabs = [
    { name: 'Cases', path: '/', icon: '📦' },
    { name: 'Upgrade', path: '/upgrade', icon: '🚀' },
    { name: 'Profile', path: '/profile', icon: '👤' },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-zinc-900 text-white flex justify-around py-2 border-t border-zinc-800">
      {tabs.map((tab) => (
        <Link key={tab.path} href={tab.path}>
          <div className={`flex flex-col items-center text-xs ${router.pathname === tab.path || active === tab.name.toLowerCase() ? 'text-blue-400' : 'text-gray-400'}`}>
            <div className="text-xl">{tab.icon}</div>
            <span>{tab.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
