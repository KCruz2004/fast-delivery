import { Cake, Coffee, FolderPlus, LayoutGrid, Package, Pizza, Salad } from "lucide-react"
import type React from "react"
import { NavLink } from "react-router-dom"
interface DrawerProps {
    isOpen: boolean
    onClose: () => void
}

const menuItems = [
    { label: "All categories", icon: LayoutGrid },
    { label: "Fast Food", icon: Pizza },
    { label: "Healthy", icon: Salad },
    { label: "Dessserts", icon: Cake },
    { label: "Beverages", icon: Coffee }
]
export const Drawer: React.FC<DrawerProps> = ({
    isOpen,
    onClose,
}) => {
    return (
        <>
            {isOpen && (
                <button
                    type="button"
                    aria-label="Cerrar Menu"
                    onClick={onClose}
                    className="fixed inset-0 z-30 bg-slate-900/40 md:hidden"
                />
            )}

            <aside
                className={`fixed left-0 top-0 z-40 h-screen w-64 border-slate-200 bg-white transition-transform duration-300 md:static md:z-auto md:translate-x-0
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
            `}
            >
                <div className="flex h-16 items-center justify-between border-b border-slate-100 px-5">
                    <div>
                        <p className="text-xs font-semibold text-slate-400">Delivery</p>
                        <h2 className="text-lg font-bold text-slate-800 ">Categorias</h2>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-md px-2 py-1 text-slate-500 hover:bg-slate-100 md:hidden "
                    >
                        X
                    </button>

                </div>

                <nav className="p-4  space-y-6">

                    {/**GESTION DONDE ESTA EL MENU DE REDIRECCIONAMIENTO DE LAS PAGINAS DE ACCIONES */}
                    <div>
                        <p className="mb-3 text-sm font-bold uppercase text-slate-400">Gestión</p>
                        <NavLink
                            to="/categories/create"
                            onClick={onClose}
                            className={({ isActive }) =>
                                `flex w-full mb-2 items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-semibold trnasition-colors 
                            ${isActive ?
                                    "bg-indigo-50 text-indigo-700" :
                                    "text-slate-600 hover:bg-slate-100"} `
                            }
                        >
                            <FolderPlus size={18} />
                            Crear Categoria
                        </NavLink>
                          <NavLink
                            to="/products/create"
                            onClick={onClose}
                            className={({ isActive }) =>
                                `flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-semibold trnasition-colors 
                            ${isActive ?
                                    "bg-indigo-50 text-indigo-700" :
                                    "text-slate-600 hover:bg-slate-100"} `
                            }
                        >
                           
                            <Package size={18}/>
                            Crear Producto
                        </NavLink>  
                    </div>
                    {/**Menu de filtros */}
                    <p className="mb-3 text-xs font-bold uppercase text-slate-400">Filters </p>
                    <ul className="space-y-2">
                        {menuItems.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <li key={item.label}>
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors
                                ${index === 0

                                                ? "bg-cyan-100 font-semibold text-cyan-700" : "text-slate-600 hover:bg-slate-100"
                                            }
                                `}
                                    >
                                        <Icon size={18} />
                                        {item.label}
                                    </button>
                                </li>
                            )

                        })}
                    </ul>
                </nav>
            </aside>

        </>
    )
}