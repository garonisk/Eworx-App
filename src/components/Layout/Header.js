import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import espressoImage from "../../assets/espresso.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Eworx Espresso</h1>
        <h6>For Orders Over 100€ You Get 10% Discount</h6>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={espressoImage} alt="A space full of coffee beans!" />
      </div>
    </Fragment>
  );
};

export default Header;
