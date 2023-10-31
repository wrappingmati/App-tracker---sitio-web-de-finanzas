import { useGlobalState } from "../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense =
    amounts
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2) * -1;

  return (
    <>
      <div className="flex justify-between mb-4">
        <h4 className="font-semibold text-xl ">Ingresos</h4>
        <div className="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
          <p className="text-xl font-semibold">${income}</p>
        </div>
      </div>
      <div className="flex justify-between mb-4">
        <h4 className="font-semibold text-xl ">Gastos</h4>
        <div className="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <p className="text-xl font-semibold">${expense}</p>
        </div>
      </div>
    </>
  );
}

export default IncomeExpenses;

{
  /* <svg
xmlns="http://www.w3.org/2000/svg"
className="h-6 w-6 text-red-500"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
aria-hidden="true"
>
<path
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth="2"
  d="M19 9l-7 7-7-7"
/>
</svg>  */
}

{
  /* <svg
xmlns="http://www.w3.org/2000/svg"
className="h-6 w-6 text-green-500"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
aria-hidden="true"
>
<path
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth="2"
  d="M5 15l7-7 7 7"
/>
</svg> */
}
