import React, { useState } from "react";
import classes from "./index.module.css";
import FacebookLogin from "react-facebook-login";
import UserData from "./UserData";
const FacebookUser = () => {
  const [userId, setUserId] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");
  const responseFacebook = (response) => {
    console.log(response);
    setUserId(response.userId);
    setName(response.name);
    setEmail(response.email);
    setPicture(response.picture.data.url);
  };

  const componentClicked = () => {
    console.log("clicked");
  };
  return (
    <div>
     
      <div className={classes.center}>
        <FacebookLogin
          appId="3018180398497220"
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
        />
      </div>
      <UserData name={name} email={email} picture={picture} />
    </div>
  );
};
export default FacebookUser;
