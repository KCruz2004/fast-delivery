import type React from "react"
import { useRegisterViewModel } from "../viewmodels/use-register"
import { useEffect } from "react"
import { toast } from "sonner"

interface RegisterPageProps {
    onNavigateToLogin:()=> void 
}


export const RegisterPage:React.FC<RegisterPageProps>=({
    onNavigateToLogin
})=>{

    const {
        form,
        confirmPassword,
        setConfirmPassword,
        isLoading,
        error,
        handleChange,
        success,
        submit
    }=useRegisterViewModel()

    useEffect(()=> {
        if(error){  
            toast.error(error)
        }
    },[error])

    useEffect(()=>{
        if(success){
            toast.success(success)
        }
    })
    return(
        <div className="min-h-screen flex flex-col relative overflow-hidden font-sans">
         <header className="relative w-full border border-slate-100 bg-white/800"> 
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    KevinDev
                    <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
                        <a href="">Explorar</a>
                        <a href="">Ofertas</a>
                        <a href="">Historias</a>
                        <a href="">Ayudas</a>
                    </nav>
                </div>
                <div className="flex items-center ">
                    <button
                        className="px-5 py-2.5 bg-indigo-600  hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold"
                        onClick={onNavigateToLogin}
                    >
                        Loguearse
                    </button>
                </div>
            </div>
         </header>
         <main className="flex-1 mx-w-8xl w-full mx-auto px-6 py-10 items-center justify-center ">
           <div className="flex justify-center">
                <div className="w-full max-w-lg border rounded-2xl shadow-xl p-8 sm:p-10">
                    <div className="mb-8">
                        <h1 className="text-3xl font-black ">Crear una cuenta</h1>
                        <p className="mt-2.5 text-sm font-medium">
                            Crea tu cuenta y disfruta de las promociones recientes
                        </p>
                    </div>
                    <form onSubmit={submit} action="">
                        <label htmlFor="" className="block text-xs font-semibold uppercase mb-2">
                            Nombre Completo
                        </label>
                        <input 
                        type="text"
                        className="w-full px-4 py-3 mb-2 border border-slate-200 focus:border-indigo-500 rounded-lg placeholder-slate-400" 
                        placeholder="Registra tu Nombre"
                        value={form.name}
                        onChange={(e)=>handleChange("name",e.target.value)}
                        />
                          <label htmlFor="" className="block text-xs font-semibold uppercase mb-2">
                          Apellido
                        </label>
                        <input 
                        type="text"
                        className="w-full px-4 py-3 mb-2 border border-slate-200 focus:border-indigo-500 rounded-lg placeholder-slate-400" 
                        placeholder="Apellido"
                        value={form.lastname}
                        onChange={(e)=>handleChange("lastname", e.target.value)}
                        />
                         <label htmlFor="" className="block text-xs font-semibold uppercase mb-2">
                            Dirección de Correo Electronico
                        </label>
                        <input 
                        type="text"
                        className="w-full px-4 py-3 mb-2 border border-slate-200 focus:border-indigo-500 rounded-lg placeholder-slate-400" 
                        placeholder="example@gmail.com"
                        value={form.email}
                        onChange={(e)=>handleChange("email", e.target.value)}
                        />
                           <label htmlFor="" className="block text-xs font-semibold uppercase mb-2">
                            Telefono
                        </label>
                        <input 
                        type="text"
                        className="w-full px-4 py-3 mb-2 border border-slate-200 focus:border-indigo-500 rounded-lg placeholder-slate-400" 
                        placeholder="7731-0115"
                        value={form.phone}
                        onChange={(e)=>handleChange("phone", e.target.value)}
                        />
                        
                        <div>
                             <label htmlFor="" className="block text-xs font-semibold uppercase mb-2">
                            Contraseña
                             </label>
                             <input 
                        type="text"
                        className="w-full px-4 py-3 mb-2 border border-slate-200 focus:border-indigo-500 rounded-lg placeholder-slate-400" 
                        placeholder="Digita tu contraseña"
                         value={form.password}
                        onChange={(e)=>handleChange("password", e.target.value)}
                        />
                        </div>
                         <div>
                             <label htmlFor="" className="block text-xs font-semibold uppercase mb-2">
                          Confirmar  Contraseña
                             </label>
                             <input 
                        type="text"
                        className="w-full px-4 py-3 mb-2 border border-slate-200 focus:border-indigo-500 rounded-lg placeholder-slate-400" 
                        placeholder="Digita tu contraseña de confirmación"
                         value={confirmPassword}
                        onChange={(e)=>setConfirmPassword( e.target.value)}
                        />
                        </div>
                        <div className="mb-8">
                            <label 
                            htmlFor=""
                            className="block text-xs font-semibold uppercase mb-2"
                            >Dirección de envio principal</label>

                            <input 
                            type="text"
                            className="w-full px-4 py-3 mb-2 border rounded-lg border-slate-200 focus:border-indigo-500 placeholder-slate-400"
                            placeholder="Ciudad, Provincia, Urbanización"
                            required
                            />
                        </div>
                          <button
                        className="w-full py-3 px-4 bg-blue-800 rounded-lg text-white hover:bg-blue-800 hover:shadow-lg transition-all duration-200 active:scale-[0.98] disabled:opacity-50" 
                        type="submit"
                        >{isLoading ? "Creando cuenta...":"Crear cuenta"}</button>
                        
                    </form>
                </div>
           
           </div>
         </main>
        </div>
    )
}