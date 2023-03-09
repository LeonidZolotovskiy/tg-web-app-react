import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Button/Header/Header";
import { useTelegramm } from "./components/hooks/useTelegramm";

function App() {
  const { tg, onToggleButton } = useTelegramm();
  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
