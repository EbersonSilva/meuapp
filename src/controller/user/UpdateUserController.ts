import { Request, Response } from "express";

export class UpdateUserController{
    async handle(request: Request, response: Response){
        const {id, name, email, admin, password} = request.body
        console.log(name)
        console.log(email)
        console.log(admin)
        console.log(password)

        const user = {
            name: name,
            email: email,
            admin: admin,
            password: password
        }
        return response.json(user)
    }
}