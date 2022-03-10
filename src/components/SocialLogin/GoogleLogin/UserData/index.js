import classes from "./index.module.css";
const UserData = ( {name,url,email} ) => {
  return (
    <div>
      <div className={classes.login}>
        <div className={classes.center}>
          <h1 className={classes.MainTitle}>Login with Google</h1>
          <h3>
            Welcome :<br />
            <p className={classes.title}>{name}</p>
          </h3>
          <h3>
            Email :<br />
            <p className={classes.title}>{email}</p>
          </h3>
          <h3 className={classes.img}> User Profile: </h3>
          <img src={url} alt={name} />
        </div>
        <div className={classes.center}></div>
      </div>
    </div>
  );
};
export default UserData;
