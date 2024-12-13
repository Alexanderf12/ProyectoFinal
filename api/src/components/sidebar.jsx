import { Filters } from "./filters";
function Sidebar( {changeFilters}) {
    return (
        <aside className="w-full lg:w-64 p-4 bg-gray-100">
        <h2 className="text-lg font-semibold mb-4">Filtros</h2>
        <Filters onChange = {changeFilters}/>
      </aside>
      
    )
  }
  
export default Sidebar;