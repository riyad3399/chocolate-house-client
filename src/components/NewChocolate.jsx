import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const NewChocolate = () => {
  const handleNewChocolate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const newChocolate = { name, country, category, photo };
    console.log(newChocolate);

    fetch("http://localhost:5000/allChocolate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newChocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successful!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="p-24 ">
      <Link to="/">
        <button className="btn btn-outline btn-success">All Chocolate</button>
      </Link>
      <h3 className="text-center text-5xl mb-10">New Chocolate</h3>
      <form onSubmit={handleNewChocolate}>
        <div className="grid md:grid-cols-1 space-y-5">
          <div>
            <label className="text-lg font-medium mb-4" htmlFor="text">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Type here"
              className="input input-bordered input-secondary w-full"
            />
          </div>
          <div>
            <label className="text-lg mb-4 font-medium" htmlFor="text">
              Country
            </label>
            <input
              type="text"
              name="country"
              placeholder="Type here"
              className="input input-bordered input-secondary w-full"
            />
          </div>
          <div>
            <label className="text-lg mb-4 font-medium" htmlFor="text">
              Category
            </label>
            <input
              type="text"
              name="category"
              placeholder="Type here"
              className="input input-bordered input-secondary w-full"
            />
          </div>
          <div>
            <label className="text-lg mb-4 font-medium" htmlFor="text">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Type here"
              className="input input-bordered input-secondary w-full"
            />
          </div>
        </div>
        <input
          className="btn btn-success btn-outline w-full mt-8"
          type="submit"
          value="Save"
        />
      </form>
    </div>
  );
};

export default NewChocolate;
