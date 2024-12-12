function Sidebar() {
    return (
        <aside className="w-full lg:w-64 p-4 bg-gray-100">
        <h2 className="text-lg font-semibold mb-4">Filtros</h2>
        <div className="space-y-4">
         
          <div>
            <h3 className="font-medium mb-2">Categoría</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="category1" />
                <label htmlFor="category1">Nike</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="category2" />
                <label htmlFor="category2">Adidas</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="category3" />
                <label htmlFor="category3">New Balance</label>
              </div>
            </div>
          </div>
      
          
          <div>
            <h3 className="font-medium mb-2">Precio</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="price1" />
                <label htmlFor="price1">$0 - $50</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="price2" />
                <label htmlFor="price2">$50 - $100</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="price3" />
                <label htmlFor="price3">$100+</label>
              </div>
            </div>
          </div>
        </div>
      </aside>
      
    )
  }
  
  
export default Sidebar;