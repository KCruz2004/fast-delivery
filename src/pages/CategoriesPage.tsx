import type React from "react";
import { CategoryForm } from "../components/CategoryForm";
import { useNavigate } from "react-router-dom";

export const CategoriesPage: React.FC = () => {
   const navigate=useNavigate()
    return (
        <div className="space-y-6 ">
            <div>
                <h2 className="text-3xl font-bold text-slate-800">Gestion de Categorias</h2>
                <p className=",t-1 text-sm text-slate-500">Administra, define y segmenta las opciones de productod para tus restaurantes</p>

            </div>
            <CategoryForm
                onCancel={()=>navigate("/catalog")}
            />
        </div>
    )
}