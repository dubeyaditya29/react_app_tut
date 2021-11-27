import React from "react";

const ContactCard = (props) => {
  const { name, email } = props.contact;
  return (
    <div className="item" style={{ display: "flex" }}>
      <img
        alt="profile_img"
        src="https://img.icons8.com/plasticine/100/000000/test-account.png"
        style={{ height: "50px", justifyContent: "center" }}
      ></img>
      <div className="content" style={{ marginTop: "8px" }}>
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i className="ui trash alternate icon" style={{ color: "red" }}></i>
    </div>
  );
};

export default ContactCard;
