import Navbar from './components/header';
import { Products } from "./components/products";
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import {useFetchData} from './components/useFetchData'
import { useState } from 'react';

function App() {

  const { data, error, loading } = useFetchData('http://localhost:3000/select')
const [filters, setFilters] = useState({
    marca: 'all',
    minPrice: 0
  })

  const filterProducts = (data) => {
    return data.filter((dat) => {
      const precio = Number(dat.precio);
      const minPrice = Number(filters.minPrice);
    
      return (
        precio >= minPrice &&
        (filters.marca === 'all' || dat.marca.nombre === filters.marca)
      );
    });
  };
 
  const filteredProducts = data && data.length > 0 ? filterProducts(data) : []

  console.log('Filtered Products:', filteredProducts);

   if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <Sidebar changeFilters={setFilters}/>
            <div className="flex-grow">
              <Products data={filteredProducts}/>
              
            </div>
          </div>
        </main>
        <Footer />
      </div>

    </>
  );
}

export default App;
