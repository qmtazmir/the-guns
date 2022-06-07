import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Navbar from "./Components/Navbar/Navbar";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function App() {
  const [guns, setGuns] = useState([]);
  console.log(guns);
  const [cart, setCart] = useState([]);
  console.log(cart);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handelAddToCart = (gun) => {
    const newCart = [...cart, gun];
    setCart(newCart);
  };

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

  return (
    <div className="App">
      <Navbar openModal={openModal}></Navbar>

      <div className="card-container">
        {guns.map((gun) => (
          <Card key={gun.id} gun={gun} handelAddToCart={handelAddToCart} />
        ))}
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        <button onClick={closeModal}>Close</button>
        <div>
          {cart.map((item) => (
            <h1 key={item.id}>{item.name}</h1>
          ))}
        </div>
      </Modal>
    </div>
  );
}

export default App;
