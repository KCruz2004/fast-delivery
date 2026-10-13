import { User, MapPin, CreditCard, Bell } from "lucide-react"

const profileOptions=[
    {label:"Informacion personal", icon: User},
    {label: "Direcciones de entrega", icon:MapPin},
    {label: "Metodos de pago", icon:CreditCard},
    {label:"Historial de pedidos", icon: Bell}
    
]
export const ProfileSideBar=()=>{
    return(
        <aside className=" h-fit rounded-xl border border-slate-200 bg-white p-4 ">
            <h2 className="text-sm font-bold text-slate-800">Gestión de Cuenta </h2>
            <p className="mb-4 text-xs text-slate-500">Configuración y accesos rapidos</p>
            <nav>
                <ul>
                    {profileOptions.map((option, index)=>{
                        const Icon= option.icon
                        const isActive = index ===0 
                        return(
                            <li key={option.label}>
                                <button
                                    type="button"
                                    className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm transition-colors ${
                                        isActive
                                        ? "border-l-4 border-indigo-600 bg-indigo-50 font-semibold text-indigo-700":
                                        "text-slate-600 hover:bg-slate-100"
                                    }`}
                                >
                                    <Icon size={16}/>
                                    {option.label}
                                </button>
                            </li>
                        )
                    })}
                   
                </ul>
            </nav>
        </aside>
    )

}