import { useContext } from "react";
import { FiltersContext } from "../context/filter";

export function useFilters () {
    const { filters, setFilters } = useContext(FiltersContext)

    const filterProducts = (data) => {
        return data.filter((dat) => {
          const precio = Number(dat.precio);
          const minPrice = Number(filters.minPrice);
        
          return (
            precio >= minPrice &&
            (filters.marca === 'all' || dat.marca.nombre === filters.marca)
          );
        });
      };
    
      return {filters, filterProducts, setFilters}
    
}