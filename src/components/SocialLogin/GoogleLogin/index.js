import { useState } from "react";
import GoogleLogin from "react-google-login";
import classes from "./index.module.css";
import UserData from "./UserData";
const GoogleUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const responseGoogle = (response) => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);

    setUrl(response.profileObj.imageUrl);
    console.log(response);
  };
  
  return (
    <div>
      <div className={classes.center}>
        <GoogleLogin
          className={classes.Google}
          clientId="574141925216-njni8f989f59a3h49trs6n0fhvaa6hhi.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>

      <UserData name={name} url={url} email={email} />
    </div>
  );
};
export default GoogleUser;
