import { Card } from "./components/Card.tsx"
import { ChaiCard } from "./components/ChaiCard.tsx"
import { ChaiList } from "./components/ChaiList.tsx"
import { Counter } from "./components/Counter.tsx"
import { OrderForm } from "./components/OrderForm.tsx"

// importing Type 
import type { Chai } from "./types.ts"

function App() {

  // data 
  const menu: Chai[] = [
    { id: 1 , name: "Masala" , price: 30 },
    { id: 2 , name: "Ginger" , price: 50 },
    { id: 3 , name: "Elaichi" , price: 60 }, 
  ]

  return (

    <div>
      React With TS 
      <ChaiCard name="Headphones" price={2500} />
      <ChaiCard name="Laptop" price={30000} />

      <div>
        <Counter/>
      </div>

      <div>
        <ChaiList items={menu} />
      </div>

      <div>
        <OrderForm onSubmit={(order) => {
          console.log("Placed" , order.name , order.cups); 
        }}/>
      </div>

      <div>
        <Card title="Coffee"
        footer={ <button> Order Now! </button> }
        />
      </div>

    </div>

  )

}

export default App
