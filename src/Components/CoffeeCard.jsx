/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
  console.log(coffees);

  const handleDelete = (id) => {
    console.log(id);

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
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");

              // **************** here remove from ui
              const remaining = coffees.filter((coffee) => coffee._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <>
      <div className="card card-side bg-[#F5F4F1] shadow-xl">
        <figure>
          <img className="w-[250px] h-[250px]  p-5" src={photo} alt="Movie" />
        </figure>
        <div className="flex justify-around py-5     w-full ">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{quantity}</p>
            <p>{supplier}</p>
            <p>{taste}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="btn-group btn-group-vertical space-y-4">
              <button className="btn  ">View </button>
              <Link to={`/updatecoffee/${_id}`} >
                <button className="btn bg-green-400 ">Update </button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn bg-orange-400"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeCard;
