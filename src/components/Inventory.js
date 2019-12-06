import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { firebaseApp } from '../firebase';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import Login from './login';

const Inventory = props => {
  const {
    storeId,
    addFish,
    updateFish,
    deleteFish,
    loadSampleFishes,
    fishes,
  } = props;

  const [owner, setOwner] = useState(null);
  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState(null);

  const storeRef = firebase.database().ref(storeId);

  const authenticate = provider => {
    // create new provider base on chosen prvider button
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    // sign it with popup then handle with authHandler
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(authHandler);
  };

  // auth and check store owner
  const authHandler = useCallback(
    async authData => {
      const userId = authData.user.uid;
      setUser(userId);

      const profile = authData.user.photoURL;
      setProfilePic(profile);

      const storeOwner = await storeRef
        .child('owner')
        .once('value')
        .then(snapshot => snapshot.val());

      // if there is no store owner, create one with current userid
      if (!storeOwner) {
        storeRef.update({ owner: userId });
      }
      setOwner(storeOwner);
    },
    [storeRef]
  );

  // logout method
  const logout = async () => {
    await firebase.auth().signOut();
    setUser(null);
  };

  // maintain user logged in on page refresh
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) authHandler({ user });
    });
  }, [authHandler, user, owner]);

  // logout button
  const logoutButton = (
    <button type="button" className="logout" onClick={logout}>
      Log Out
    </button>
  );

  // logged in user picture
  const picture = <img src={profilePic} alt="user" />;

  // if there is no user currently loggedin, only show Login
  if (!user) return <Login authenticate={authenticate} />;

  // check if the user is the owner
  if (owner && user !== owner)
    return (
      <div className="inventory">
        {logoutButton}
        <h3>
          Sorry, you are not the owner of this store...
          <br />
          <br />
          go to the homepage to create a new store just for you!
        </h3>
      </div>
    );

  // otherwise (loggedin owner has access to full inventory)
  if (owner && user && owner === user)
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <div className="inventory-top">
          {logoutButton}
          {picture}
        </div>
        {fishes &&
          Object.keys(fishes).map(key => (
            <EditFishForm
              key={key}
              fish={fishes[key]}
              updateFish={updateFish}
              deleteFish={deleteFish}
              index={key}
            />
          ))}
        <AddFishForm addFish={addFish} />
        <button type="button" onClick={loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  if (user !== owner) return <div>loading...</div>;
};

Inventory.propTypes = {
  addFish: PropTypes.func.isRequired,
  updateFish: PropTypes.func.isRequired,
  deleteFish: PropTypes.func.isRequired,
  loadSampleFishes: PropTypes.func.isRequired,
  fishes: PropTypes.object,
};
export default Inventory;
