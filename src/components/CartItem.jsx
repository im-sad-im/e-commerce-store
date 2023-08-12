import { FaTrashAlt } from "react-icons/fa";

export default function CartItem(props) {
  return (
    <div className="cartItem d-flex flex-row my-5 gap-4">
      <div className="cart-img" style={{ maxWidth: "150px" }}>
        <img src={props.img} alt="product image" className="w-100" />
      </div>
      <div className="cartItem-details d-flex justify-content-between w-50">
        <div className="cartItem-content d-flex-column">
          <h4>{props.name}</h4>
          <div>{props.subName}</div>
          <div>{props.colorway}</div>
          <FaTrashAlt
            onClick={() => {
              props.onRemoveCart(props.id);
            }}
          />
        </div>
        <div className="price">
          <span className="fw-bold">${props.price}</span>
        </div>
      </div>
    </div>
  );
}
