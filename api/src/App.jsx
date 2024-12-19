import Navbar from './components/header';
import { Products } from "./components/products";
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import {useFetchData} from './components/useFetchData'
import { useFilters } from './hooks/useFilters';
import { Cart } from './components/cart';
import { CartProvider } from './context/cartContext';



function App() {
  const { data, error, loading } = useFetchData('http://localhost:3000/select')
  const {filterProducts} = useFilters()
 
  const filteredProducts = data && data.length > 0 ? filterProducts(data) : []

  console.log('Filtered Products:', filteredProducts);

   if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <Sidebar/>
            <Cart/>
            <div className="flex-grow">
              <Products data={filteredProducts}/>
              
            </div>
          </div>
        </main>
        <Footer />
      </div>

    </CartProvider>
  );
}

export default App;
