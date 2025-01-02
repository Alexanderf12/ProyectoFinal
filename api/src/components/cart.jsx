import { useId } from "react";
import "./cart.css"
import { CartIcon, DeleteItem } from "./icons";
import { useCart } from '../hooks/useCart.js'


function CartItem({nombre, precio, imagen, quantity, addToCart, removeFromCart}){

    console.log({nombre})
    return (
        <li className="boxCart flex flex-col items-center bg-gray-100 rounded-lg shadow-md p-4">
            <img src={imagen} alt="" className="w-20 h-20 object-cover rounded-md mb-2" />

            <div className="text-center mb-2">
                <span className="block text-sm font-medium text-gray-800">{nombre}</span>
                <span className="block text-sm text-gray-600">${precio}</span>
            </div>

            <footer className="flex justify-between items-center w-full text-sm">
                <small className="text-gray-500">{quantity}</small>
                <div className="flex items-center  gap-1">
                    <button
                        onClick={addToCart}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-700 text-xs px-2 py-1 rounded-sm transition"
                    >
                        +
                    </button>
                    <button
                        onClick={removeFromCart}
                        className="text-red-500 hover:text-red-600 text-xs flex items-center transition"
                    >
                        <DeleteItem />
                    </button>
                </div>
            </footer>
        </li>

      
    )
}

export function Cart () {
    const cartCheckboxId = useId()
    const {cart, clearCart, addToCart, removeFromCart, acumuladorPrice} = useCart()
    console.log(cart)
    

    return (
        <>

            <label htmlFor={cartCheckboxId} className="cart-button text-white">
                <CartIcon /> {cart.length}
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />

            <aside className="cart">
               
                <ul className="flex flex-wrap justify-center">
                
                    {cart.map(product => (

                        <CartItem
                            key={product.id}
                            addToCart={() => addToCart(product)}
                            removeFromCart={()=>removeFromCart(product)}
                            {...product}
                        />

                    ))}
                    

                    <label htmlFor="">Total:</label>

                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 text-xs px-2 py-1 rounded-sm transition" onClick={clearCart}>
                        {cart.length > 0 ? 'Vaciar Carrito' : 'Tu carrito está vacío'}

                    </button>

                </ul>

                
            </aside>



        </>
        
    )
    

}