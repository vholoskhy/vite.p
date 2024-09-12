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
    <div className="header">
      <div onClick={handleClickButton} className={isOpen ? "hidden" : "block"}>
        <p className="cursor-pointer">Klick</p>
      </div>

      {isOpen && (
        <>
          <p className="container-p">produk</p>
          <div className="container">
            <h1>AutoBot</h1>
            <ul className="navbar">
              <li>Home</li>
              <li>About</li>
              <li>portofolio</li>
              <li>Profil</li>
              <li>Contact</li>
            </ul>
            <div>
              <button className="Belisekarang">Beli Sekarang</button>
              <button className="Cart">cart</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
// export function App(props)
