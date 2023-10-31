import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

function TransactionForm() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState("");
  const [amount, setAmout] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    });
    setAmout("");
    setDescription("")
  };

  return (
    
    <div >
      <form  onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingrese descripción"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={description}
        />

        <input
          type="number"
          step="0.01"
          placeholder="0.00 "
          onChange={(e) => setAmout(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={amount}
          
        />
        <button className="bg-indigo-700 text white px-3 py-2 rounded-lg block mb-2 w-full font-semibold ">Agregar transacción</button>
      </form>
    </div>
   
  );
}

export default TransactionForm;
