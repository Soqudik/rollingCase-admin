import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [tab, setTab] = useState("cases");

  const renderContent = () => {
    switch (tab) {
      case "cases":
        return (
          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold mb-4">📦 Case</h2>
            <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden max-w-xs mx-auto">
              <Image src="/case1.png" width={100} height={100} alt="case1" />
              <Image src="/case2.png" width={100} height={100} alt="case2" />
              <Image src="/case3.png" width={100} height={100} alt="case3" />
              <Image src="/case4.png" width={100} height={100} alt="case4" />
            </div>
            <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-xl text-sm">
              🔌 Connect TON
            </button>
          </div>
        );
      case "upgrade":
        return (
          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold mb-4">🚀 Upgrade</h2>
            <p className="text-sm text-gray-600">Upgrade your level to get better drops.</p>
          </div>
        );
      case "profile":
        return (
          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold mb-4">👤 Profile</h2>
            <p className="text-sm text-gray-600">Your balance, inventory and settings.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-between bg-white text-gray-900">
      <main>{renderContent()}</main>

      <nav className="flex justify-around border-t border-gray-200 py-3 bg-white shadow-inner">
        <button onClick={() => setTab("cases")} className="text-center text-sm">
          📦<div>case</div>
        </button>
        <button onClick={() => setTab("upgrade")} className="text-center text-sm">
          🚀<div>upgrade</div>
        </button>
        <button onClick={() => setTab("profile")} className="text-center text-sm">
          👤<div>profile</div>
        </button>
      </nav>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <h1 className="text-3xl font-bold text-blue-800">
        Tailwind работает ✅
      </h1>
    </div>
  );
}
