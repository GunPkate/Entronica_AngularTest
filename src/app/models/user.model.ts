
export interface User{
    id: string,
    name: string,
    email: string,
    phone: string,
    age: number,
    isActive: boolean
  }
export interface ResponseUser{
  resultCode: number,
  resultDescription: string,
  data: {
    _id: string,
    username: string,
    email: string,
    phone: string,
    age: number,
    isActive: boolean
  }[]
}

export interface RequestUser{
  "username": string,
  "password": string,
}