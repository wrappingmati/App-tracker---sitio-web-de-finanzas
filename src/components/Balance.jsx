
import { useGlobalState } from "../context/GlobalState";

function Balance() {
  const {transactions} = useGlobalState();


  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);
  return (
    <div className="flex justify-between mb-4">
     
      <h3 className="font-semibold text-2xl ">Tu balance</h3>
      <h1 className="text-2xl font-semibold ">${total}</h1>
    </div>
  );
}

export default Balance;
