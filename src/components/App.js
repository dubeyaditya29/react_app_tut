import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "CONTACT";
  const [contact, setContact] = useState([]);
  const addContactHandler = (contacts) => {
    //console.log(contacts);
    setContact([...contact, contacts]);
    console.log(contact);
  };

  //using useEffect for storing and retriving from localStorage.

  useEffect(() => {
    const localItem = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setContact(localItem);
    console.log(localItem);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contact));
  }, [contact]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contact={contact} />
    </div>
  );
}

export default App;
