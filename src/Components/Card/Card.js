import React from "react";
import "./Card.css";
import { BsFillCartDashFill } from "react-icons/bs";

const Card = ({ gun, handelAddToCart }) => {
  //   console.log(gun);
  const { name, img, bullet, capacity, action, price, id } = gun;

  return (
    <div className="card">
      <div className="image-container">
        <img src={img} alt="" />
      </div>
      <div className="gun-info">
        <h1>Name of gun:{name}</h1>
        <p>Bullet type: {bullet}</p>
        <p>Capacity: {capacity}</p>
        <p>Action: {action}</p>
      </div>
      <div>
        <button onClick={() => handelAddToCart(gun)}>
          <BsFillCartDashFill className="icon" />
        </button>
        <h1>$ {price}</h1>
      </div>
    </div>
  );
};

export default Card;
