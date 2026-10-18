import React from "react";

class FoodItem extends React.Component {
  renderStars() {
    const { rating } = this.props;
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? "★" : "☆");
    }
    return stars.join("");
  }

  render() {
    const { title, price, img, desc } = this.props;

    return (
      <div className="single-food">
        <div className="img">
          <img src={img} alt={title} />
        </div>
        <div className="title-price">
          <h3>{title}</h3>
          <p>${price}</p>
        </div>
        <div className="rating">{this.renderStars()}</div>
        <div className="food-desc">
          {desc.length > 100 ? desc.slice(0, 100) + "---" : desc}
        </div>
      </div>
    );
  }
}

export default FoodItem;
