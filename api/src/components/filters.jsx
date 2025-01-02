import {useFilters} from '../hooks/useFilters'


export function Filters(){
  const {filters, setFilters} = useFilters()

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
        <div className="space-y-4 bg-white">
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
        <br />
    
        
        <div>
          <h3 className="font-medium mb-2">Precio</h3>
          <div className="space-y-2">
          <div> 
              <label htmlFor=''>Precio a partir de:</label>
              <input
                type='range'
                min='0'
                max='300'
                onChange={handleChangeMinPrice}
                value={filters.minPrice}
              />
              <span>${filters.minPrice}</span>
      </div>
          </div>
        </div>
      </div>
    )
}