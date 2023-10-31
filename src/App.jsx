import { GlobalProvider } from "./context/GlobalState";
import Balance from "./components/Balance";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";
import ExpenseChart from "./components/transactions/ExpenseChart";

function App() {
  return (
    <GlobalProvider>
      
      <div className="bg-zinc-900 text-white h-screen flex-col flex justify-center items-center">
      {/* <h1 className="text-4xl font-bold mb-4">Aplicacion de gastos</h1> */}
        <div className="container mx-auto w-3/6 ">
          
          <div className="bg-zinc-800 p-10  rounded-lg flex items-center justify-center space-x-8 ">
            
            <div className="bg-zinc-700 p-8 rounded-lg  ">
              
            <div className="mb-8 w-72 h-72  ">
         
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            </div>
            <div className="flex flex-col flex-1 ml-4   ">
              <ExpenseChart />
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
