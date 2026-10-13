import React, { useState } from "react";
import { useAuth } from "../context/useAuth";
import { createCategory } from "../service/category-service";
import type { CategoryPayload } from "../models/category";

export function useCategoryViewModel(onSuccessCallback?: () => void) {
    const { token } = useAuth()

    const [form, setForm] = useState<CategoryPayload>({
        name: "",
        description: ""
    })

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const handleChange = (field: keyof CategoryPayload, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }))
    }

    const submit= async(e?:React.FormEvent)=>{
        if(e) e.preventDefault()
        if(!form.name.trim()){
            setError("El nombre de la categoria es obligatorio")
            return
        }
        
        try{
            setIsLoading(true)
            setError("")
            setSuccess("")

            await createCategory({

                name: form.name.trim(),
                description:form.description.trim()
            },
        token
        )
        setSuccess("Categoria Creada con exito")
        setForm({name:"", description:""})
        if(onSuccessCallback){
            onSuccessCallback()
        }
        } catch (error){
            setError(
                error instanceof Error ? error.message: "No se pudo crear la categoria"
            )
        }
        finally{
            setIsLoading(false)
        }
    }
    return{
        form,
        handleChange,
        submit,
        isLoading,
        error,
        success
    }
}
