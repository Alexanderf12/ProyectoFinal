import {useFilters} from '../hooks/useFilters'


export function Filters(){
  const {setFilters} = useFilters()
  const handleChangeMinPrice = (event) => {
    setFilters(preveState => ({
      ...preveState,
      minPrice: event.target.value

    }))
  }

  const handleChangeCategory = (event) => {
    const { value, checked } = event.target;
  
    setFilters((prevState) => {
      const currentBrands = prevState.marca === 'all' ? [] : [...prevState.marca];
      const updatedBrands = checked
        ? [...currentBrands, value] // Agregar marca seleccionada
        : currentBrands.filter((brand) => brand !== value); // Eliminar marca desmarcada
  
      return {
        ...prevState,
        marca: updatedBrands.length > 0 ? updatedBrands : 'all', // Si no hay marcas, volver a 'all'
      };
    });
  };
    return (
        <div className="space-y-4">
         
        <div>
          <h3 className="font-medium mb-2">Categoría</h3>
          <div className="space-y-2">
            {['Nike', 'Adidas', 'New Balance', 'Puma'].map((marca, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={marca}
                  id={`category${index}`}
                  onChange={handleChangeCategory}
                />
                <label htmlFor={`category${index}`}>{marca}</label>
              </div>
            ))}
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
              <input type="checkbox" value='100' id="price2" onChange={handleChangeMinPrice} />
              <label htmlFor="price2">$50 - $100</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" value= '200' id="price3" onChange={handleChangeMinPrice} />
              <label htmlFor="price3">$100+</label>
            </div>
          </div>
        </div>
      </div>
    )
}