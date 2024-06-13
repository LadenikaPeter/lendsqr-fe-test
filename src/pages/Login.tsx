import classes from "./login.module.scss";

export default function LoginPage() {
  return (
    <>
      <div>
        <div className={classes["container-wrapper"]}>
          <div className={classes["container-left"]}>
            <img src="/logo.svg" alt="company-logo" id={classes.logo} />
            <img src="/hero.svg" alt="main-hero" id={classes.hero} />
          </div>
          <div className={classes["container-right"]}>
            <div>
              <h3>Welcome!</h3>
              <p>Enter details to login.</p>
            </div>
            <div>
              <input type="email" placeholder="Email" name="email" />
              <input type="password" placeholder="Password" name="password" />
              <p>forgot password?</p>
            </div>
            <button>Log in</button>
          </div>
        </div>
      </div>
    </>
  );
}
