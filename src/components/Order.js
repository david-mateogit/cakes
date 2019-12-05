/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { formatPrice } from '../helpers';

const Order = ({ order, fishes, removeFromOrder }) => {
  const renderOrder = key => {
    const fish = fishes[key];
    const count = order[key];
    const isAvailable = fish && fish.status === 'available';
    const transitionOptions = {
      classNames: 'order',
      key,
      timeout: { enter: 500, exit: 500 },
    };

    if (!fish) return null;

    if (!isAvailable) {
      return (
        <CSSTransition {...transitionOptions}>
          <li key={key}>
            Sorry {fish ? fish.name : 'fish'} is no longer available
          </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition {...transitionOptions}>
        <li key={key}>
          <span className="order-span">
            <span>
              <TransitionGroup component="span" className="count">
                <CSSTransition
                  classNames="count"
                  key={count}
                  timeout={{ enter: 500, exit: 500 }}
                >
                  <span>{count}</span>
                </CSSTransition>
              </TransitionGroup>
              lbs {fish.name} {formatPrice(count * fish.price)}
            </span>
            <button
              type="button"
              className="delete"
              onClick={() => {
                removeFromOrder(key);
              }}
            >
              &times;
            </button>
          </span>
        </li>
      </CSSTransition>
    );
  };
  let total = 0.0;
  let orderIds;
  if (order && fishes) {
    orderIds = Object.keys(order);
    total = orderIds.reduce((prevTotal, key) => {
      const fish = fishes[key];
      const count = order[key];
      const isAvailable = fish && fish.status === 'available';
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);
  }
  return (
    <div className="order-wrap">
      <h2>Order</h2>
      <TransitionGroup component="ul" className="order">
        {orderIds &&
          orderIds.map(key => {
            return renderOrder(key);
          })}
      </TransitionGroup>
      <div className="total">
        Total: <strong>{formatPrice(total)}</strong>
      </div>
    </div>
  );
};

Order.propTypes = {
  order: PropTypes.object.isRequired,
  fishes: PropTypes.object,
  removeFromOrder: PropTypes.func.isRequired,
};
export default Order;
