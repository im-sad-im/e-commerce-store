import { useContext } from "react"
import { CartContext } from "../pages/ProductPage"

export default function Cart() {
    const { cartItem } = useContext(CartContext);
    console.log(cartItem);
    return (
        <>
            <h1 className="mt-5">Cart</h1>
            <h2>{cartItem[0].name}</h2>
        </>
    )
}