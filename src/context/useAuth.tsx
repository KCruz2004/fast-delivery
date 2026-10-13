import { useContext } from "react";
import { AuthContext } from "./AuthContext";
//LA FUNCION QUE SE UTILIZARA EN TODOS  LOS COMPONENTES DONDE QUIERA UTILIZAR LA INFORMACION GLOBAL
export function useAuth(){
    const context= useContext (AuthContext)
    if(!context) throw new Error("use Auth debe usarse dentro de AuthProvider")
        return context
}