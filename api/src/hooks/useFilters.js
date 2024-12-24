import { useContext } from "react";
import { FiltersContext } from "../context/filter";

export function useFilters () {
    const { filters, setFilters } = useContext(FiltersContext)
     
    const filterProducts = (data) => {
        return data.filter((dat)  => {
          const category = filters.marca
          const precio = Number(dat.precio);
          const minPrice = Number(filters.minPrice);
          console.log(filters.marca)
        
          return (
            precio >= minPrice &&
            (category === 'all' || filters.marca.includes(dat.marca.nombre))
            
          );
        });
      };
    
      return {filters, filterProducts, setFilters}
    
}