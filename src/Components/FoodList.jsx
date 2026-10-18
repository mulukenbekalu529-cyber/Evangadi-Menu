import React from "react";
import menu from "../commonResource/data";
import ratings from "../commonResource/ratings";
import FoodItem from "./FoodItem";

class FoodList extends React.Component {
  render() {
    return (
      <div className="foods-container">
        {menu.map((item) => (
          <FoodItem
            key={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
            desc={item.desc}
            rating={ratings[item.id]}
          />
        ))}
      </div>
    );
  }
}

export default FoodList;
