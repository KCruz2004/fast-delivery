import { Check } from "lucide-react"
import type React from "react"
import { useState } from "react"

interface ProductFormProps {
    onCancel: () => void
    onSuccess: () => void
}

const availablesCategories = [
    "Fast Food",
    "Healthy"
]

export const ProductForm: React.FC<ProductFormProps> = ({
    onCancel,
    onSuccess
}) => {
    const [category, setCategory] = useState();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Producto creado");
        if (onSuccess) onSuccess()
    }
    return (
        <div className="max-w-4xl rounded-2xl border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="border-b border-slate-100 p-6">
                <h3 className="text-lg font-bold text-slate-800">Crear nuevo producto</h3>
                <p className="text-xs text-slate-400 mt-1 ">Ingresa los datos escenciales del producto para registrarlo en el catalogo</p>
            </div>
            <form
                onSubmit={handleSubmit} className="p-6 space-y-6"
                action="">

                <div>
                    <label htmlFor="" className="block text-xs font-bold text-slate-700 uppercase mb-2">
                        Nombre del producto
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Ej. Hamburguesa Doble Carne "
                        className="w-full rounded-lg border border-slate-200 py-3 px-4 text-xs placeholder-slate-400 focus:border-indigo-600 focus:outline-none"
                    />
                </div>
                <div>
                    <label
                        htmlFor=""
                        className="block text-xs font-bold text-slate-700 uppercase mb-2">
                        Categoria
                    </label>
                    <select
                        required
                        value={category}
                        className="w-full rounded-lg border border-slate-200 py-3 px-4 text-xs  text-slate-700  focus:border-indigo-600 focus:outline-none"
                    >
                        {availablesCategories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>
                  <div>
                    <label htmlFor="" className="block text-xs font-bold text-slate-700 uppercase mb-2">
                       Código de Barra
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Ej. 7515526461616 "
                        className="w-full rounded-lg border border-slate-200 py-3 px-4 text-xs placeholder-slate-400 focus:border-indigo-600 focus:outline-none"
                    />
                    <span className="text-[10px] text-slate-400 block mt-1">
                        Código interno de inventario
                    </span>
                </div>
                  <div>
                        <label htmlFor="" className="block text-xs font-bold text-slate-700 uppercase mb-2">
                            Descripcion Detallada
                        </label>
                        <textarea
                            required
                            placeholder="Describe la presentación y notas de preparación"
                            className="w-full  h-32 rounded-lg border border-slate-200 py-3 px-4 text-xs placeholder-slate-400 focus:border-indigo-600 focus:outline-none"    
                        />
                          <span className="text-[10px] text-slate-400 block mt-1">
                        Asegurate de incluir advertencias o especificaciones de porciones para los repartidores
                    </span>
                    </div>
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div>
                                <label htmlFor=""  className="block text-xs font-bold text-slate-700 uppercase mb-2">
                                    Precio Regular    
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-slate-700">$</span>
                                    <input 
                                        type="text"
                                        step="0.01"
                                        min="0"
                                        required
                                        placeholder="0.0"
                                        className="w-full border-slate-200 py-3 pl-8 pr-4 text-xs text-slate-700 focus:border-b-indigo-600" 
                                    />
                                </div>
                            </div>
                              <div>
                                <label htmlFor=""  className="block text-xs font-bold text-slate-700 uppercase mb-2">
                                    Precio Oferta   
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-slate-700">$</span>
                                    <input 
                                        type="text"
                                        step="0.01"
                                        min="0"
                                        required
                                        placeholder="0.0"
                                        className="w-full border-slate-200 py-3 pl-8 pr-4 text-xs text-slate-700 focus:border-b-indigo-600" 
                                    />
                                </div>
                            </div>
                             <div>
                                <label htmlFor=""  className="block text-xs font-bold text-slate-700 uppercase mb-2">
                                    Stock Inicial  
                                </label>
                                <div className="relative">
                                   
                                    <input 
                                        type="text"
                                        step="0.01"
                                        min="0"
                                        required
                                        placeholder="0.0"
                                        className="w-full border-slate-200 py-3 pl-8 pr-4 text-xs text-slate-700 focus:border-b-indigo-600" 
                                    />
                                </div>
                            </div>
                             <div>
                                <label htmlFor=""  className="block text-xs font-bold text-slate-700 uppercase mb-2">
                                    Stock minimo
                                </label>
                                <div className="relative">
                               
                                    <input 
                                        type="text"
                                        step="0.01"
                                        min="0"
                                        required
                                        placeholder="0.0"
                                        className="w-full border-slate-200 py-3 pl-8 pr-4 text-xs text-slate-700 focus:border-b-indigo-600" 
                                    />
                                </div>
                            </div>
                        </div>

                    <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-5">
                          <button
                            type="button"
                            onClick={onCancel}
                            className="rounded-lg bg-slate-100 hover:bg-slate-200 px-5 py-2 text-xs font-semibold text-slate-600 "
                        >
                            Cancelar
                        </button>
                        <button
                            className="rounded-lg bg-indigo-600 hover:bg-indigo-700 px-5 py-2 text-xs font-semibold text-white"
                        >
                            <Check className="flex mr-4"/>
                            Crear Producto
                        </button>
                    </div>
            </form>

        </div>
    )
}