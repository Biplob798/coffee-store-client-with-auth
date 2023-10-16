import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./Components/CoffeeCard";
import { useState } from "react";
import Navbar from "./Components/Navbar";

function App() {
  // const coffees = useLoaderData();

  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees);

  console.log(coffees);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Navbar></Navbar>
      <h1 className="text-center font-bold p-6 text-5xl text-purple-500">
        Hot And Cold Coffees: {coffees.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-6">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
