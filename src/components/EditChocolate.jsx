import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditChocolate = () => {
    const chocolate = useLoaderData();
    console.log(chocolate);
  const { name, country, category, photo, _id } = chocolate;

  const handleUpdatedChocolate = (event) => {
      event.preventDefault();
    //   console.log(_id);
    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const updatedChocolate = { name, country, category, photo };
    console.log(updatedChocolate);

    fetch(`http://localhost:5000/allChocolate/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedChocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated Successful!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="p-24 ">
      <Link to="/">
        <button className="btn btn-outline btn-success">All Chocolate</button>
      </Link>
      <h3 className="text-center text-5xl mb-10">Updated Chocolate</h3>
      <form onSubmit={handleUpdatedChocolate}>
        <div className="grid md:grid-cols-1 space-y-5">
          <div>
            <label className="text-lg font-medium mb-4" htmlFor="text">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Type here"
              defaultValue={name}
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
              defaultValue={country}
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
              defaultValue={category}
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
              defaultValue={photo}
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

export default EditChocolate;
