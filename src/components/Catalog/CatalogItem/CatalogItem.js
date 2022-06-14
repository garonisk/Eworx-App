import classes from "./CatalogItem.module.css";
import CatalogItemForm from "./CatalogItemForm";
import { useContext } from "react";
import CartContext from "../../../store/CartContext";

const CatalogItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `€${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.catalog}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <CatalogItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default CatalogItem;
