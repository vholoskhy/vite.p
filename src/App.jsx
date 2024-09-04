import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={handleClickButton}>
        <p className="cursor-pointer">Klick</p>
      </div>

      {isOpen && (
        <>
          <p className="container">ZUAN SANGEAN</p>
          <div className="container text-6xl text-red-700 flex ">
            <h1>AutoBot</h1>
            <ul>
              <li className="shadow-emerald-500">Home</li>
              <li>About</li>
              <li>portofolio</li>
              <li>Profil</li>
              <li>Contact</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
