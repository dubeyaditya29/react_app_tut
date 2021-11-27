import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  <h2>Contact List </h2>;
  try {
    var RenderContactList = props.contact.map((contact) => {
      return <ContactCard contact={contact} />;
    });
  } catch (error) {
    console.log(error);
  }

  return <div className="ui celled list">{RenderContactList}</div>;
};

export default ContactList;
