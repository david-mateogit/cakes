import React from 'react';
import PropTypes from 'prop-types';

import { getFunName } from '../helpers';

const StorePicker = props => {
  const myInput = React.createRef();
  const goToStore = e => {
    e.preventDefault();
    props.history.push(`/store/${myInput.current.value}`);
  };
  return (
    <>
      <form
        className="store-selector"
        onSubmit={e => {
          return goToStore(e);
        }}
      >
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store &rarr;</button>
      </form>
    </>
  );
};

StorePicker.propTypes = {
  history: PropTypes.object.isRequired,
};
export default StorePicker;
