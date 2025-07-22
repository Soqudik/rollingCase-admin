import BottomNav from '../components/BottomNav';

export default function Upgrade() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center pb-20">
      <h1 className="text-2xl font-semibold mb-6">🚀 Upgrade</h1>
      <p className="text-center max-w-xs">
        Здесь будет раздел улучшений.
      </p>

      <BottomNav active="upgrade" />
    </div>
  );
}
