import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./Components/CoffeeCard";
import Navbar from "./Components/Navbar";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  console.log(loadedCoffees);
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-5xl text-purple-600 ">
        Coffee Store : {coffees.length}
      </h1>

      <div className="m-10 grid grid-cols-2 gap-10">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
