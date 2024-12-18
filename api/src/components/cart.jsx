import { useId } from "react";
import "./cart.css"
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./icons";

export function Cart () {
    const cartCheckboxId = useId()


    return (
        <>

        <label htmlFor={cartCheckboxId} className="cart-button">
            <CartIcon/>
        </label>
        <input id ={cartCheckboxId} type="checkbox" hidden />

        <aside className="cart">
            <ul>
                <li>
                    <img src="" alt="" />

                    <div>
                        <strong>Nike</strong> -$1999
                    </div>

                    <footer>
                        <small>
                            Qty: 1
                        </small>
                        <button>+</button>
                    </footer>
                </li>
            </ul>

            <button>
                <ClearCartIcon/>
            </button>
        </aside>
        </>
    )

}