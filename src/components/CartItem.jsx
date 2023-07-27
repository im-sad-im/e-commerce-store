import { useContext } from 'react';
import { CartContext } from "../pages/ProductPage";

export default function CartItem() {
    const { cartItem } = useContext(CartContext);

    return (
        <>
            {
                cartItem.map((item) => {
                    return (
                        <div key={item.id} className="cartItem d-flex flex-row my-5 gap-4">
                            <div className="cart-img" style={{ maxWidth: "150px" }}>
                                <img src={item.img} alt="product image" className='w-100' />
                            </div>
                            <div className="cartItem-details d-flex justify-content-between w-50">
                                <div className="cartItem-content d-flex-column">
                                    <h4>{item.name}</h4>
                                    <div>{item.subName}</div>
                                    <div>{item.colorway}</div>
                                </div>
                                <div className="price">
                                    <span className='fw-bold'>${item.price}</span>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </>
    )
}
