export function Filters( {onChange}){

    const handleChangeMinPrice = (event) => {
        onChange(preveState => ({
            ...preveState,
            minPrice: event.target.value
    
        }))
    }

    return (
        <div className="space-y-4">
         
        <div>
          <h3 className="font-medium mb-2">Categoría</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input type="checkbox" value ='Nike'  id="category1"  />
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
              <input type="checkbox" value='50' id="price1" onChange={handleChangeMinPrice} />
              <label htmlFor="price1">$0 - $50</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" value='200' id="price2" onChange={handleChangeMinPrice} />
              <label htmlFor="price2">$50 - $100</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" value= '250' id="price3" onChange={handleChangeMinPrice} />
              <label htmlFor="price3">$100+</label>
            </div>
          </div>
        </div>
      </div>
    )
}