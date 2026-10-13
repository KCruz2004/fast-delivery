export interface CategoryPayload{
    name:string
    description:string
}

export interface CategoryResponse{
    id:number | string
    name: string
    description:string
    imagen?:string
    createdAt?: string
    updatedAt?:string 
}