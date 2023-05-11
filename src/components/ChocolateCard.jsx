import { FaTrash, FaPenAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ChocolateCard = ({ chocolate, chocolates, setChocolates }) => {
  const { name, country, category, photo, _id } = chocolate;

  const handleDelete = (id) => {
    console.log(id);

    fetch(`http://localhost:5000/allChocolate/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaning = chocolates.filter((cho) => cho._id !== id);
              setChocolates(remaning);
            }
          }
        });
      });
  };

  return (
    <div>
      <div className="overflow-x-auto w-full ">
        <table className="table w-full">
          {/* head */}

          <tbody>
            {/* row 1 */}
            <tr className="flex justify-between">
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16 ">
                      <img src={photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <div className="font-bold">{name}</div>
                </div>
              </td>
              <td>
                <div>
                  <p>{country}</p>
                </div>
              </td>
              <td>
                <div>
                  <p>{category}</p>
                </div>
              </td>
              <th>
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn btn-outline bg-orange-50 text-black mr-2"
                >
                  <FaTrash />{" "}
                </button>
                <Link to={`/editChocolate/${_id}`}>
                  <button className="btn btn-outline bg-orange-50 text-black">
                    <FaPenAlt />{" "}
                  </button>
                </Link>
              </th>
            </tr>
          </tbody>
        </table>
        <hr />
      </div>
    </div>
  );
};

export default ChocolateCard;
