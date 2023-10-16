import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, photo } = coffee;

  console.log(coffee);

  const handleDelete = (_id) => {
    console.log(_id);
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
        fetch(
          `  https://coffee-store-server-6xnlkbke8-biplobs-projects-623841b5.vercel.app/coffee/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");

              const remaining = coffees.filter((coffee) => coffee._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="h-42 w-64 " src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full p-4">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{taste}</p>
          <p>{quantity}</p>
          <p>{supplier}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-4">
            <button className="btn btn-outline">View</button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn btn-outline">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-outline bg-orange-400"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
CoffeeCard.propTypes = {
  coffee: PropTypes.object,
  coffees: PropTypes.object,
  setCoffees: PropTypes.object,
};
