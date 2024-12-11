// import './products.css'
import {AddToCartIcon} from './icons.jsx'
import { useState, useEffect } from 'react'


export function Products (){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await fetch('http://localhost:3000/select'); // Reemplaza con tu endpoint
          if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
          }
          const result = await response.json();
          setData(result);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []); // El array vacío asegura que se ejecute una vez al montar el componente.
  
    if (loading) return <p>Cargando datos...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                data.map(data => (
                    <div className="bg-white shadow-md rounded-lg overflow-hidden" key={data.id}>
                        <img src={data.imagen} alt={data.nombre} width={200} height={500} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{data.nombre}</h3>
                            <p className="text-gray-600">${data.precio}</p>
                            <button   className="mt-2 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
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