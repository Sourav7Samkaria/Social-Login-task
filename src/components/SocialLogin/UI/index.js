import { ToggleButton } from "@mui/material";
import { useState } from "react";
import classes from "./index.module.css";
import FacebookUser from "../FacebookLogin";
import GoogleUser from "../GoogleLogin";
const UI = () => {
  const [show, setShow] = useState();
  return (
    <div className={classes.Button}>
      <ToggleButton onClick={() => setShow("GoogleUser")}>Login with Google</ToggleButton>
      <ToggleButton onClick={() => setShow("FaceBookUser")}>
        Login with Facebook
      </ToggleButton>
      {show === "GoogleUser" && <GoogleUser />}
      {show === "FaceBookUser" && <FacebookUser />}
    </div>
  );
};
export default UI;
