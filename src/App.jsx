import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Footer } from "./components/Footer";
import { MyRoutes } from "./routes/Routes";
function App() {
  return (
    <div>
      <MyRoutes />
    </div>
  );
}

export default App;
