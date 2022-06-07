import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [guns, setGuns] = useState([]);
  console.log(guns);
  const [cart, setCart] = useState([]);
  console.log(cart);

  const handelAddToCart = (gun) => {
    const newCart = [gun];
    setCart(newCart);
  };

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  return (
    <div className="App">
      <Navbar></Navbar>
      <div>
        {cart.map((item) => (
          <h1 key={item.id}>{item.name}</h1>
        ))}
      </div>

      <div className="card-container">
        {guns.map((gun) => (
          <Card key={gun.id} gun={gun} handelAddToCart={handelAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default App;
