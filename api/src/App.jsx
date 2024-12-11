import Navbar from './components/header';
import { Products } from "./components/products";
import Footer from './components/footer';
import Sidebar from './components/sidebar';

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <Sidebar/>
            <div className="flex-grow">
              <Products/>
            </div>
          </div>
        </main>
        <Footer />
      </div>

    </>
  );
}

export default App;
