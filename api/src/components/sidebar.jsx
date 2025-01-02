import { Filters } from "./filters";
function Sidebar() {
    return (
        <aside className="w-full lg:w-64 p-4 bg-white">
        <h2 className="text-lg font-semibold mb-4">Filtros</h2>
        <Filters/>
      </aside>
      
    )
  }
  
export default Sidebar;