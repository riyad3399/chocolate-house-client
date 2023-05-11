import { Link, useLoaderData } from "react-router-dom";
import ChocolateCard from "./ChocolateCard";
import { useState } from "react";

const Home = () => {
    const loadedChocolate = useLoaderData();
    
    const [chocolates, setChocolates] = useState(loadedChocolate);

  return (
    <div className="container mx-auto mt-10">
      <Link to="/newChocolate">
        <button className="btn btn-outline btn-accent">
          Add new Chocolate
        </button>
      </Link>
      <h3 className="text-5xl text-center my-8">New Chocolate</h3>
      <div className="flex justify-between bg-slate-200 p-4 rounded-lg">
        <p>Image</p>
        <p>Name</p>
        <p>Coutry</p>
        <p>Category</p>
        <p>Action</p>
      </div>

      <div>
        {chocolates.map((chocolate) => (
          <ChocolateCard
            key={chocolate._id}
                chocolate={chocolate}
                chocolates={chocolates}
                setChocolates={setChocolates}
          ></ChocolateCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
