import { useContext } from "react";
import { Context } from "../App";

const TotalExpenses = () => {
  const { expenses } = useContext(Context);

  if (expenses.length === 0) {
    return <p>No data</p>;
  } else {
    const totalPrice =
      Math.round(
        expenses.reduce(
          (total, expense) => parseFloat(total) + parseFloat(expense.price),
          0
        ) * 100
      ) / 100;

    const totalLiters =
      Math.round(
        expenses.reduce(
          (total, expense) => parseFloat(total) + parseFloat(expense.liters),
          0
        ) * 100
      ) / 100;

    const totalDistance =
      Math.round(
        expenses.reduce(
          (total, expense) => parseFloat(total) + parseFloat(expense.distance),
          0
        ) * 100
      ) / 100;

    return (
      <table>
        <tbody>
          <tr>
            <th>Total price</th>

            <th>Liters</th>

            <th>Distance</th>
          </tr>
          <tr>
            <td>{totalPrice}</td>
            <td>{totalLiters}</td>
            <td>{totalDistance}</td>
          </tr>
        </tbody>
      </table>
    );
  }
};

export default TotalExpenses;
