import { Request, Response } from "express"
export class ListUsersController {
    async handle(request: Request, response: Response) {
        const users = [
            {
                name: "Eberson",
                email: "eberson@gmail.com",
                admin: false,
                password: "12345"
            },
            {
                name: "Melissa",
                email: "melissa@gmail.com",
                admin: false,
                password: "87654"
            },

        ]
        return response.json(users)

    }
}