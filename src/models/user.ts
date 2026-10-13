//REQUEST
export interface LoginPayLoad{
    email:string
    password:string
}

export interface Role {
    id:string
    nombre:string
    imagen:string

}

export interface UserResponse {
    id:number
    email:string
    name:string
    lastName: string
    lastname:string
    image:string
    phone:string
    notification_token:string
    roles:Role[]
}

export interface LoginResponse{
    token:string 
    userResponse:UserResponse
}

export interface UserRequest{
    name:string
    lastname:string
    phone:string
}