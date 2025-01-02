import Navbar from './components/header';
import { Products } from "./components/products";
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import {useFetchData} from './components/useFetchData'
import { useFilters } from './hooks/useFilters';
import { Cart } from './components/cart';
import { CartProvider } from './context/cartContext';
import { useState } from 'react';



function App() {
  const [resp, setResp] = useState(true);
  const { data, error, loading } = useFetchData(`http://localhost:3000/select/resp?resp=${resp}`)
  const {filterProducts} = useFilters()

 
  const filteredProducts = data && data.length > 0 ? filterProducts(data) : []
  const handleRespChange = (e) => {
    setResp(e.target.value === 'true'); // Convierte el string del select a booleano
  };

  console.log('Filtered Products:', filteredProducts);

   if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Cart/>
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <Sidebar/>
            
            <div className="flex-grow">
              <div className="flex justify-between pb-4">
                <label htmlFor="resp-select" className="mr-2 font-bold">Tienda <span className='font-normal'>{filteredProducts.length} Resultados</span> </label>
                <div>
                  <label htmlFor="resp-select" className="mr-2">Ordenar por precio:</label>
                  <select
                    id="resp-select"
                    value={resp.toString()} // Convertimos el booleano a string
                    onChange={handleRespChange}
                  >
                    <option value="true">Ascendente</option>
                    <option value="false">Descendente</option>
                  </select>

                </div>

              </div>
              <Products data={filteredProducts} />

            </div>
          </div>
        </main>
        <Footer />
      </div>

    </CartProvider>
  );
}

export default App;
