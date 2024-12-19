// import './products.css'
import {AddToCartIcon} from './icons.jsx'
import { useCart } from '../hooks/useCart.js'


export function Products ({data}){
    const { addToCart} = useCart()

   
    if (!data || data.length === 0) return <p>No hay productos disponibles</p>;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                data.map((product) => (
                  <div className="bg-white shadow-md rounded-lg overflow-hidden" key={product.id || product.nombre || index}>
                        <img src={product.imagen} alt={product.nombre} width={200} height={500} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{product.nombre}</h3>
                            <p className="text-gray-600">${product.precio}</p>
                            <button  onClick={()=> addToCart(data)} className="mt-2 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
                                <div className="flex justify-center items-center gap-2">
                                <AddToCartIcon />
                                Agregar al carrito 
                                </div>
                              
                            </button>
                        </div>

                    </div>
                ))
            }

        </div>
 
    )
}

export default Products