import React from "react";
import CardItem from "../CardItem/CardItem.component";

import Image9 from "../../assets/images/img-9.jpg";
import Image2 from "../../assets/images/img-2.jpg";

import "./Card.styles.css";

const Card = () => {
  return (
    <div className="cards">
      <h1>Checkout This Epic Destination</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Image9}
              path="/services"
              label="Adventure"
              text="Explore the Jungle in 1 week!"
            />
            <CardItem
              src={Image2}
              path="/services"
              label="Adventure"
              text="Explore the Ocean in 1 month!"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Image9}
              path="/services"
              label="Adventure"
              text="Explore the Jungle in 1 week!"
            />
            <CardItem
              src={Image2}
              path="/services"
              label="Adventure"
              text="Explore the Ocean in 1 month!"
            />
            <CardItem
              src={Image2}
              path="/services"
              label="Adventure"
              text="Explore the Ocean in 1 month!"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
