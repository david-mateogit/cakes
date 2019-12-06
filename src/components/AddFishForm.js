import React from 'react';
import PropTypes from 'prop-types';

const AddFishForm = ({ addFish }) => {
  const nameRef = React.createRef();
  const priceRef = React.createRef();
  const statusRef = React.createRef();
  const descRef = React.createRef();
  const imageRef = React.createRef();

  const createFish = e => {
    e.preventDefault();
    const fishId = `fish${Date.now()}`;
    const fishBody = {
      name: nameRef.current.value,
      price: parseFloat(priceRef.current.value),
      status: statusRef.current.value,
      desc: descRef.current.value,
      image: imageRef.current.value,
    };
    const fullFish = {};
    fullFish[fishId] = fishBody;
    // addFish(fullFish)
    addFish(fishBody);
    // clear form
    e.currentTarget.reset();
  };

  return (
    <form className="fish-edit" onSubmit={e => createFish(e)}>
      <input
        type="text"
        name="name"
        ref={nameRef}
        required
        placeholder="Name"
      />
      <input
        type="number"
        name="price"
        ref={priceRef}
        required
        placeholder="Price"
      />
      <select name="status" ref={statusRef} required>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea name="desc" ref={descRef} required placeholder="Description" />
      <input
        type="text"
        name="image"
        ref={imageRef}
        required
        placeholder="image"
      />
      <button type="submit">+ Add Fish</button>
    </form>
  );
};

AddFishForm.propTypes = {
  addFish: PropTypes.func.isRequired,
};

export default AddFishForm;
