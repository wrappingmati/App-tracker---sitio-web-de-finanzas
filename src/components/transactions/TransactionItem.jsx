import { useGlobalState } from "../../context/GlobalState";
export function TransactionItem({transaction}){
    const { deleteTransaction } = useGlobalState();
    return(
        <li className="bg-zinc-700 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
            <p className="text-sm">{transaction.description}</p>
           <div className="flex items-center">
           <span>${transaction.amount}</span>
            <button onClick={()=>{
                deleteTransaction(transaction.id)
                }} className="ml-2 ">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 6.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 11-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            </button>
           </div>
        
        </li>
    )
}


export default TransactionItem