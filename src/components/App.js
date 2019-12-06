import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import firebase from '../firebase';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

const App = props => {
  const { storeId } = props.match.params;
  const [fishes, setFishes] = useState({});
  const [order, setOrder] = useState(
    JSON.parse(localStorage.getItem(storeId)) || {}
  );

  const fishesRef = firebase.database().ref(`${storeId}/fishes/`);
  useEffect(() => {
    // Take a snapshot of the DB
    fishesRef.on('value', snapshot => {
      setFishes(snapshot.val());
    });
    return () => {
      // Stop the listener
      fishesRef.off();
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem(storeId, JSON.stringify(order));
    // eslint-disable-next-line
  }, []);

  const addFish = fish => {
    const newFishKey = firebase
      .database()
      .ref(storeId)
      .child('fishes')
      .push().key;
    const fishObject = {};
    fishObject[newFishKey] = fish;
    fishesRef.update(fishObject);
  };

  const updateFish = (key, updatedFish) => {
    const allFishes = { ...fishes };
    allFishes[key] = updatedFish;
    // setFishes(allFishes);
    fishesRef.update(allFishes);
  };

  const deleteFish = key => {
    fishesRef.child(key).remove();
    removeFromOrder(key);
  };

  const loadSampleFishes = () => {
    sampleFishes.map(fish => addFish(fish));
  };

  const addToOrder = key => {
    setOrder({
      ...order,
      [key]: order[key] + 1 || 1,
    });
  };

  const removeFromOrder = key => {
    const newOrder = { ...order };
    delete newOrder[key];
    setOrder(newOrder);
  };

  return (
    <div className="cakes">
      <div className="menu">
        <Header tagline="fresh seafood market" />
        <ul className="fishes">
          {fishes &&
            Object.keys(fishes).map(fish => (
              <Fish
                key={fish}
                index={fish}
                details={fishes[fish]}
                addToOrder={addToOrder}
              />
            ))}
        </ul>
      </div>
      <Order fishes={fishes} order={order} removeFromOrder={removeFromOrder} />
      <Inventory
        storeId={storeId}
        fishes={fishes}
        addFish={addFish}
        loadSampleFishes={loadSampleFishes}
        updateFish={updateFish}
        deleteFish={deleteFish}
      />
    </div>
  );
};

App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      storeId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default App;
