import { useState } from "react";
import { ReactComponent as CartIcon } from "../../images/icon-cart.svg";
export function Cart() {
  const [items, setItems] = useState();
  return (
    <section className="cart-items">
      <CartIcon />
    </section>
  );
}
