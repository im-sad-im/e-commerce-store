import {useContext} from 'react';
import { CartContext } from "./pages/ProductPage";

export default function CartItem(){
    const {cartItem} = useContext(CartContext);
    return(
        <>
            <h2>Item</h2>
        </>
    )
}
