import { useId } from "react";
import "./cart.css"
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./icons";
import { useCart } from '../hooks/useCart.js'


function CartItem({nombre, precio, imagen, quantity, addToCart}){

    console.log({nombre})
    return (
        <li>
            <img src= {imagen} alt="" />

            <div>
                <strong>{nombre}</strong> - ${precio}
            </div>

            <footer>
                <small >
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export function Cart () {
    const cartCheckboxId = useId()
    const {cart, clearCart, addToCart} = useCart()
    console.log(cart)

    return (
        <>

        <label htmlFor={cartCheckboxId} className="cart-button">
            <CartIcon/>
        </label>
        <input id ={cartCheckboxId} type="checkbox" hidden />

        <aside className="cart">
            <ul>
                {cart.map(product => (
                    
                    <CartItem
                     key={product.id}
                     addToCart={()=> addToCart(product)}
                     {...product}
                    />
                    
                ))}
                
            </ul>

            <button onClick={clearCart}>
                <ClearCartIcon/>
            </button>
        </aside>
        </>
    )

}