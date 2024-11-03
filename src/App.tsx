import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      minHeight: "100vh",
      backgroundColor: theme === "light" ? "#ffffff" : "#1a1a1a",
      color: theme === "light" ? "#000000" : "#ffffff",
      transition: "background-color 0.3s, color 0.3s",
    },
    header: {
      display: "flex",
      justifyContent: "flex-end", // Aligns items to the right
      alignItems: "center",
      padding: "20px",
      gap: "20px", // Adds space between hamburger and theme toggle
    },
    themeButton: {
      padding: "8px 16px",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
      backgroundColor: theme === "light" ? "#333" : "#fff",
      color: theme === "light" ? "#fff" : "#333",
      transition: "background-color 0.3s, color 0.3s",
    },
    main: {
      padding: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <button onClick={toggleTheme} style={styles.themeButton}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"} Mode
        </button>
        <HamburgerMenu theme={theme} />
      </header>
      <main style={styles.main}>
        <p>Click to change the theme of the page!</p>
      </main>
    </div>
  );
};

export default App;
