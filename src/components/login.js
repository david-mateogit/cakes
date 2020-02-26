import React from "react";
import PropTypes from "prop-types";

const login = ({ authenticate }) => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign in to manage your store's inventory.</p>
    <button
      type="button"
      className="github"
      onClick={() => {
        authenticate("Github");
      }}
    >
      {" "}
      Log In With GitHub{" "}
    </button>
    <button
      type="button"
      className="twitter"
      onClick={() => {
        authenticate("Twitter");
      }}
    >
      {" "}
      Log In With Twitter{" "}
    </button>
    <button
      type="button"
      className="facebook"
      onClick={() => {
        authenticate("Facebook");
      }}
    >
      {" "}
      Log In With Facebook{" "}
    </button>
    <button
      type="button"
      className="github"
      onClick={() => {
        authenticate("Google");
      }}
    >
      {" "}
      Log In With Google{" "}
    </button>
  </nav>
);

login.propTypes = {
  authenticate: PropTypes.func.isRequired,
};
export default login;
