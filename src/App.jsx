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
        <div className=" w-6 sm: container mx-auto xl:w-2/3 2xl:w-2/3 flex-col flex justify-center items-center md: container mx-auto w-2/3 flex-col flex justify-center items-center">
          
          <div className=" xl:flex-row 2xl:flex-row  sm:bg-zinc-800 sm:p-10 sm:rounded-lg sm:flex sm:flex-col sm:items-center sm:justify-center sm:space-x-8 xl:bg-zinc-800 xl:p-10  md:rounded-lg xl:flex items-center xl:justify-center xl:space-x-8  xl:bg-zinc-800 sm:p-10  xl:rounded-lg sm:flex xl:items-center xl:justify-center xl:space-x-8">
            
            <div className="  sm:bg-zinc-700 sm:p-8 sm:rounded-lg sm:flex sm:flex-col  md:flex-row md:bg-zinc-700 md:p-8 md:rounded-lg md:flex md:flex-col md:flex-row ">
              
            <div className=" w-52 sm:mb-8  sm:w-72 sm:h-72  md:mr-4 md:mb-8 md:w-72 md:h-72 xl:mb-8 xl:w-72 xl:h-72 ">
         
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            </div>
            <div className=" sm:flex sm:flex-col sm:flex-1 sm:ml-4  md:ml-0 ">
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
