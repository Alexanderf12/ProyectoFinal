function Footer() {
    return (
        <footer className="bg-gray-100 py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold mb-2">Acerca de nosotros</h3>
                        <p className="text-sm text-gray-600">Somos una tienda en línea comprometida con ofrecer los mejores productos a nuestros clientes.</p>
                    </div>
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold mb-2">Enlaces rápidos</h3>
                        <ul className="text-sm text-gray-600">
                            <li><a href="/">Inicio</a></li>
                            <li><a href="/tienda">Tienda</a></li>
                            <li><a href="/novedades">Novedades</a></li>
                            <li><a href="/contacto">Contacto</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h3 className="text-lg font-semibold mb-2">Contáctanos</h3>
                        <p className="text-sm text-gray-600">
                            Email: info@tienda.com<br />
                            Teléfono: (123) 456-7890<br />
                            Dirección: Calle Principal 123, Ciudad
                        </p>
                    </div>
                </div>
                <div className="mt-6 text-center text-sm text-gray-600">
                    © 2024 Tu Tienda. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    )
}
  
export default Footer;