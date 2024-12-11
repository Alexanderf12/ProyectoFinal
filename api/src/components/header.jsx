import {AddToCartIcon} from './icons.jsx'
function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">LOGO</span>
          </a>

          <nav className="hidden md:flex space-x-6">
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
                className="pl-8 w-[200px] border rounded-md p-2"
              />
            </div>

            <a href="/carrito" className="relative flex items-center">
              <span className="h-6 w-6"> <AddToCartIcon /></span>
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
                0
              </span>
            </a>

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
