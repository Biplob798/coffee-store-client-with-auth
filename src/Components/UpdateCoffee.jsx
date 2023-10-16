import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updateCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updateCoffee);

    // send data to the server

    fetch(
      ` https://coffee-store-server-6xnlkbke8-biplobs-projects-623841b5.vercel.app/coffee/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateCoffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.matchedCount > 0) {
          Swal.fire("Updated", "Your Coffee has been Updated.", "success");
        }
      });
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-[rgb(244,243,240)]">
      <h2 className="text-3xl text-purple-500 font-bold text-center p-6">
        This is update a Coffee : {name}
      </h2>
      <form onSubmit={handleUpdateCoffee} className="space-y-6">
        {/* form name and quantity row  */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">coffee name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="coffee name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier taste row  */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">supplier name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="supplier name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and details row  */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form photo url row  */}
        <div className="">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Update Coffee"
          className="bg-[#D2B48C] btn btn-outline w-full"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
