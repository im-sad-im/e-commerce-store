import Container from "react-bootstrap/esm/Container";
import CartItem from "./CartItem";
import { CartContext } from "../pages/ProductPage";
import { useContext } from "react";

export default function Cart() {
  const { cartItem, setCartItem } = useContext(CartContext);

  function removeCart(id) {
    setCartItem((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Container className="mt-5 pt-5">
        <div className="membership border p-2">
          <h4 style={{ color: "#FF5000" }}>
            Members get free shipping on orders $50+
          </h4>
          <p>
            Become a Nike Member for fast free shipping on orders $50+{" "}
            <span>Join us</span> or <span>Sign-in</span>{" "}
          </p>
        </div>
        <div
          className="off p-2 mt-2 position-relative"
          style={{ backgroundColor: "rgb(247, 247, 247)" }}
        >
          <span className="banner-title">New Styles Added: Save Up to 60%</span>
          <p className="banner-subtitle">
            {" "}
            Get an extra 20% off select styles with code SCHOOL20. Ends 8.5.{" "}
          </p>
        </div>
        {/* render items if there is items in cart */}
        {cartItem.length > 0 ? (
          cartItem.map((item, index) => {
            return (
              <CartItem
                key={index}
                id={index}
                img={item.img}
                name={item.name}
                subName={item.subName}
                colorway={item.colorway}
                price={item.price}
                onRemoveCart={removeCart}
              />
            );
          })
        ) : (
          <div className="no-item">
            <h3>Bag</h3>
            <p>There are no items in your bag.</p>
          </div>
        )}
      </Container>
    </>
  );
}
