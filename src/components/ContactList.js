import React from "react";

const ContactList = (props) => {
  console.log(props);
  const renderContactList = props.contact.map((contact) => {
    return (
      <div className="item">
        <div className="content">
          <div className="header">{contact.name}</div>
          <div>{contact.email}</div>
        </div>
        <i className="ui trash alternate icon"></i>
      </div>
    );
  });
  return (
    <div className="ui celled list">
      <h2>Contact List </h2>
      {renderContactList}
    </div>
  );
};

export default ContactList;
