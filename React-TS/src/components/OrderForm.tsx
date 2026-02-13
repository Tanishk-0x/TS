import { useState } from "react";

// Structure
interface OrderFormProp {
    onSubmit(order: {
        name: string; 
        cups: number; 
    }):void ; 

}

export function OrderForm({onSubmit}: OrderFormProp) {

    const [name , setName] = useState<string> ('masala');
    const [cups , setCups] = useState<number> (1);

    function HandleSubmit (e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault(); 
        onSubmit({name , cups}); 
    }

  return (

    <form onSubmit={HandleSubmit}>

        <label> Chai Name: </label>
        <input type="text" value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
            setName(e.target.value)}
        />

        <label> Cups: </label>  
        <input type="number" value={cups}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
            setCups(Number(e.target.value) || 0)}
        />

        <button>Submit</button>
      
    </form>
  )
}


