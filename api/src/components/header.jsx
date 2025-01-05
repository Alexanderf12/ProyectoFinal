import { Link } from 'react-router-dom'
import { useAuth } from '../context/loginContext';

function Header() {
  const { isLogin, setIsLogin } = useAuth();
  console.log(isLogin)
 
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-[#014133] to-[#03714A] backdrop-blur supports-[backdrop-filter]:bg-gradient-to-r supports-[backdrop-filter]:from-[#014133] supports-[backdrop-filter]:to-[#03714A]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold text-white">LOGO</span>
          </a>

          <nav className="hidden md:flex space-x-12 text-white">
            <a href="/" className="text-sm font-medium">
              Inicio
            </a>
            <a href="/tienda" className="text-sm font-medium">
              Tienda
            </a>
            <a href="/novedades" className="text-sm font-medium">
              Novedades
            </a>
            <a href="/contacto" className="text-sm font-medium">
              Contacto
            </a>
          </nav>

          <div className='flex justify-between w-[200px]'>
            <div className="relative hidden md:block">
              <span className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"></span>
              <input
                type="text"
                placeholder="Buscar"
                className="pl-8 w-[400px] border rounded-md p-2"
              />
            </div>
            
            

          </div>
          <div className="text-white">
           <Link to="/login">{!isLogin ? "Iniciar Sesión" : "Cerrar Sesión" }</Link>
          </div>


          
        </div>

        {/* Menú móvil */}
        <nav className="md:hidden py-4 flex flex-wrap justify-center gap-4">
          <a href="/" className="text-sm font-medium">
            Inicio
          </a>
          <a href="/tienda" className="text-sm font-medium">
            Tienda
          </a>
          <a href="/novedades" className="text-sm font-medium">
            Novedades
          </a>
          <a href="/contacto" className="text-sm font-medium">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}


export default Header;
