import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";

const Fish = ({
  details: { name, price, status, desc, image },
  addToOrder,
  index,
}) => {
  const isAvailable = status === "available";

  const handleClick = () => {
    addToOrder(index);
  };
  return (
    <li className="menu-fish">
      <img src={image} alt={name} />
      <h3 className="fish-name">
        {name} <span className="price">{price && formatPrice(price)}</span>
      </h3>
      <p>{desc}</p>
      <button type="button" disabled={!isAvailable} onClick={handleClick}>
        {isAvailable ? `Add To Cart` : `Sold Out!`}
      </button>
    </li>
  );
};

Fish.propTypes = {
  addToOrder: PropTypes.func.isRequired,
  details: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Fish;
