import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const subBasket = () => {
    console.log({
      cartItems: cartCtx?.items,
      totalAmount: cartCtx?.totalAmount,
    });
    cartCtx.clearBasket();
    props.onClose();
    alert("Order Placed...");
  };

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        {cartCtx.totalAmount > 100 ? (
          <>
            <span>Total Amount with 10% discount </span>
            <span>{`€${(cartCtx.totalAmount * 0.9).toFixed(2)}`}</span>
          </>
        ) : (
          <>
            <span>Total Amount </span>
            <span>{`€${cartCtx.totalAmount.toFixed(2)}`}</span>
          </>
        )}
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {cartCtx.items.length > 0 && (
          <button onClick={subBasket} className={classes.button}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
