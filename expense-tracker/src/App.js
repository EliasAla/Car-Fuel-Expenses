import "./App.css";
import { useState } from "react";
import Header from "./components/Header.js";
import RefuelForm from "./components/RefuelForm";
import { createContext } from "react";
import TotalExpenses from "./components/TotalExpenses";
import CarsExpenses from "./components/CarsExpenses";

export const Context = createContext({});

const App = () => {
  const [liters, setLiters] = useState("");
  const [price, setPrice] = useState("");
  const [distance, setDistance] = useState("");
  const [car, setCar] = useState("");
  const [expenses, setExpenses] = useState([]);

  return (
    <div className="mainContainer">
      <Context.Provider
        value={{
          liters,
          setLiters,
          price,
          setPrice,
          distance,
          setDistance,
          car,
          setCar,
          expenses,
          setExpenses,
        }}
      >
        <Header header="Car fuel expenses" />
        <RefuelForm />
        <br></br>
        <Header header="Total expenses" />
        <TotalExpenses />
        <Header header="Expenses per car" />
        <CarsExpenses />
      </Context.Provider>
    </div>
  );
};

export default App;
