import classes from "./index.module.css";
const UserData = ({ name, email, picture }) => {
  return (
    <div>
    <div className={classes.login}>
      <div className={classes.center}>
        <h1 className={classes.MainTitle}>Login with Facebook</h1>
        <h3>
          User Name :<br />
          <p className={classes.title}>{name}</p>
        </h3>
       
        <h3>
          Email  :<br />
          <p className={classes.title}>{email}</p>
        </h3>
        <h3 className={classes.img}> User Profile </h3>
        <img src={picture} alt={name} />
      </div>
    </div>
  </div>
  );
};
export default UserData;
