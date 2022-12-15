import { useContext } from "react";
import { Context } from "../App";

const RefuelExpenseForm = () => {
  const {
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
  } = useContext(Context);

  // Kutsutaan kun käyttäjä submitoi lomakkeen
  const addRefuel = (event) => {
    event.preventDefault();

    // Tarkistaa input -kenttien arvojen järkevyyden
    if (
      liters > 0 &&
      price > 0 &&
      distance > 0 &&
      car.length > 0 &&
      /^[A-Za-z]*$/.test(car)
    ) {
      // Luodaan uusi objekti käyttäjän syöttämistä tiedoista
      const expenseObject = {
        id: expenses.length + 1,
        liters: liters,
        price: price,
        distance: distance,
        car: car,
      };

      // Tarkistaa löytyykö kyseinen auto jo expenses -taulukosta
      const carIndex = expenses.findIndex((expense) => {
        return expense.car === car;
      });

      // Jos ei löydy
      if (carIndex === -1) {
        // Luodaan kopio expenses -taulukosta johon lisätty uusi objekti ja asetetaan se nykyisesksi
        setExpenses(expenses.concat(expenseObject));
      } else {
        // Jos löytyy,
        const expensesCopy = expenses;
        expensesCopy[carIndex].liters =
          parseFloat(expensesCopy[carIndex].liters) + parseFloat(liters);
        expensesCopy[carIndex].price =
          parseFloat(expensesCopy[carIndex].price) + parseFloat(price);
        expensesCopy[carIndex].distance =
          parseFloat(expensesCopy[carIndex].distance) + parseFloat(distance);

        // setExpenses(expenses.concat(expensesCopy));
      }
    } else {
      window.alert("Invalid inputs! Check your fields");
    }

    // Tyhjentää lomakkeen kentät
    setLiters("");
    setPrice("");
    setDistance("");
    setCar("");
  };

  const handleLitersChange = (event) => {
    setLiters(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
  };
  const handleCarChange = (event) => {
    setCar(event.target.value);
  };

  return (
    <form onSubmit={addRefuel}>
      <p>Liters</p>
      <input value={liters} onChange={handleLitersChange} />

      <p>Price (€)</p>
      <input value={price} onChange={handlePriceChange} />

      <p>Distance (km)</p>
      <input value={distance} onChange={handleDistanceChange} />

      <p>Car</p>
      <input value={car} onChange={handleCarChange} />
      <br></br>
      <br></br>
      <button className="add_refuel" type="sumbit">
        Add refuel
      </button>
    </form>
  );
};

export default RefuelExpenseForm;
