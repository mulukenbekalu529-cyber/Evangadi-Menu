
import React from "react";
import "./commonResource/style.css";
import Header from "./Components/Header";
import FoodList from "./Components/FoodList";

class App extends React.Component {
  render() {
    return (
      <div className="all-container">
        <Header />
        <FoodList />
      </div>
    );
  }
}

export default App;
