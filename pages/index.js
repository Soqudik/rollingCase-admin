import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("cases");

  const renderContent = () => {
    switch (activeTab) {
      case "cases":
        return <div><h2>Cases</h2><p>List of cases will be here.</p></div>;
      case "upgrade":
        return <div><h2>Upgrade</h2><p>Upgrade your account or features here.</p></div>;
      case "profile":
        return <div><h2>Profile</h2><p>Your user profile info will be here.</p></div>;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <header style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
        <h1>Rolling Case Admin</h1>
      </header>

      <main style={{ flexGrow: 1, padding: "20px" }}>{renderContent()}</main>

      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          borderTop: "1px solid #ccc",
          padding: "10px 0",
          backgroundColor: "#f9f9f9",
          position: "sticky",
          bottom: 0,
        }}
      >
        {["cases", "upgrade", "profile"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "10px 20px",
              fontSize: 16,
              backgroundColor: activeTab === tab ? "#4caf50" : "transparent",
              color: activeTab === tab ? "white" : "black",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>
    </div>
  );
}
