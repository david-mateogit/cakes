import React from "react";
import PropTypes from "prop-types";

const EditFishForm = props => {
  const { name, price, status, desc, image } = props.fish;
  const { updateFish, deleteFish, index } = props;

  function handleChange(evt) {
    const updatedFish = {
      ...props.fish,
      [evt.target.name]: evt.target.value,
    };
    updateFish(props.index, updatedFish);
  }

  return (
    <div className="fish-edit">
      <input
        name="name"
        type="text"
        placeholder="Name"
        required
        value={name}
        onChange={handleChange}
      />
      <input
        name="price"
        type="number"
        placeholder="Price"
        required
        value={price}
        onChange={handleChange}
      />
      <select name="status" onChange={handleChange} value={status}>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea
        name="desc"
        placeholder="Desc"
        required
        value={desc}
        onChange={handleChange}
      />
      <input
        name="image"
        type="text"
        placeholder="Image"
        required
        value={image}
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={() => {
          deleteFish(index);
        }}
      >
        Remove Fish
      </button>
    </div>
  );
};

EditFishForm.propTypes = {
  fish: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  updateFish: PropTypes.func.isRequired,
  deleteFish: PropTypes.func.isRequired,
  index: PropTypes.string.isRequired,
};
export default EditFishForm;
