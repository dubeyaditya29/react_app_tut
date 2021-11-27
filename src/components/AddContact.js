import React, { useState } from "react";

const AddContact = (props) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const formHandler = (event) => {
    //console.log("Inside formHandler");
    event.preventDefault();
    if (contact.name === "" || contact.email === "") {
      alert("not working");
      return;
    }
    props.addContactHandler(contact);
    setContact({ name: "", email: "" });
    //console.log(contact);
  };
  return (
    <>
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={formHandler}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            id="name"
            value={contact.name}
            onChange={(e) => {
              setContact({ ...contact, name: e.target.value });
            }}
          ></input>
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            id="email"
            value={contact.email}
            onChange={(e) => {
              setContact({ ...contact, email: e.target.value });
            }}
          ></input>
        </div>
        <button type="submit" className="ui button blue">
          Add Now!
        </button>
      </form>
    </>
  );
};

export default AddContact;
