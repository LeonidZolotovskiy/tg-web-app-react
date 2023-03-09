import React, { useEffect } from "react";
import "./App.css";



function App() {
  useEffect(() => {
    tg.ready();
  }, []);

 
  return <div className="App">
    Hello, wolrd!
  </div>;
}

export default App;
