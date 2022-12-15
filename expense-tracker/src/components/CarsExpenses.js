import { useContext } from "react";
import { Context } from "../App";
import CarExpense from "./CarExpense";

const CarsExpenses = () => {
  const { expenses } = useContext(Context);

  if (expenses.length === 0) {
    return <p>No data</p>;
  } else {
    return (
      <table>
        <tbody>
          <tr>
            <th>Car</th>
            <th>Price</th>
            <th>Liters</th>
            <th>Distance</th>
            <th>€/100km</th>
            <th>L/100km</th>
          </tr>
          {expenses.map((expense) => (
            <CarExpense key={expense.id} expense={expense} />
          ))}
        </tbody>
      </table>
    );
  }
};

export default CarsExpenses;
