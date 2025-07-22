import { TonConnectButton } from '@tonconnect/ui-react';
import BottomNav from '../components/BottomNav';

export default function Profile() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-between pb-20">
      <div className="pt-10">
        <h1 className="text-2xl font-semibold mb-6">👤 Profile</h1>
        <TonConnectButton className="text-black" />
      </div>

      <BottomNav active="profile" />
    </div>
  );
}
