import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../../context/GlobalState";

function ExpenseChart() {

const {transactions}= useGlobalState()
//valores predeterminados para que no de "NaN"
const total = transactions.reduce((acc,transaction)=> (acc+=transaction.amount),0 ); 

const totalInconme = transactions.filter(transaction => transaction.amount >0)
.reduce((acc,transaction)=> (acc += transaction.amount),0);


const totalExpense = transactions.filter(transaction => transaction.amount <0)
.reduce((acc,transaction)=> (acc += transaction.amount),0)*-1;


const totalExpensesPercentaje = Math.round((totalExpense/totalInconme)*100);
const totalIncomePercentage = 100 - totalExpensesPercentaje;


  return (
    <VictoryPie
      colorScale={["#e74c3c", "#2ecc71"]}
      data={[
        { x: "Expenses", y: totalExpensesPercentaje },
        { x: "Incomexpenses", y: totalIncomePercentage },
      ]}
      animate={{
        duration: 200,
      }}
      labels={({ datum }) => datum.y+"%"}
      labelComponent={<VictoryLabel angle={45} style={{ fill: "#FFFFFF" }} />}
    />
  );
}

export default ExpenseChart;
