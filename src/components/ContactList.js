import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const RenderContactList = props.contact.map((contact) => {
    return <ContactCard contact={contact} />;
  });

  return (
    <div className="ui celled list">
      <h2>Contact List </h2>
      {RenderContactList}
    </div>
  );
};

export default ContactList;
