const CarExpense = ({ expense }) => {
  return (
    <tr>
      <td>{expense.car}</td>
      <td>{expense.price}</td>
      <td>{expense.liters}</td>
      <td>{expense.distance}</td>
      <td>
        {Math.round(((100 * expense.price) / expense.distance) * 100) / 100}
      </td>
      <td>
        {Math.round(((100 * expense.liters) / expense.distance) * 100) / 100}
      </td>
    </tr>
  );
};

export default CarExpense;
