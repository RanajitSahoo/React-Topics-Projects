import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = ["Sabzi", "Salad", "Milk", "Rice", "Vegetables", "Ghee"];
  // let foodItems = [];

  // if(foodItems.length === 0){
  //   return <h3>I am Still hungry</h3>;
  // }

  // let emptymessage = foodItems.length === 0 ? <h3>I am Hungry</h3>:null;

  let [foodItems, setFoodItems] = useState([]);

  let textStateArr = useState("Food Item Entered By User");

  let textToShow = textStateArr[0];
  let setChangeText = textStateArr[1];

  // let [textToShow,setChangeText] = useState("Food Item Entered By User");
  const OnKeyDown = (event) => {
    if(event.key === "Enter"){
      let newItem = event.target.value;
      event.target.value="";
      let newItems = [...foodItems,newItem];
      setFoodItems(newItems);
    }
    setChangeText(event.target.value);
  };

  return (
    <Container>
      <h1 className="text-center">Healthy Foods</h1>
      {/* {emptymessage } */}
      
      <FoodInput handleOnKeyDown={OnKeyDown} />
      <ErrorMessage items={foodItems} />
      {/* <p>{textToShow}</p> */}
      <FoodItems items={foodItems} />
    </Container>
  );
}

export default App;
