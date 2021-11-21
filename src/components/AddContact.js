import React from "react";

const AddContact = () => {
  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <div className="ui form">
        <div className="field">
          <label for="name">Name</label>
          <input type="text" id="name"></input>
        </div>
        <div className="field">
          <label for="email">Email</label>
          <input type="text" id="email"></input>
        </div>
      </div>
      <button type="button" className="ui button blue">
        Add Now!
      </button>
    </div>
  );
};

export default AddContact;
