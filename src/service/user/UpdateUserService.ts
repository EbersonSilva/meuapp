import { IUserRequest } from "../../interface/IUserRequest";

export class UpdateUserService {
    async execute({ id, name, email, admin = false, password }: IUserRequest) {
        if (!email) {
            throw new Error("Email incorreto");
        }
        const user = {
            id: id,
            name: name,
            email: email,
            admin: false,
            password: password
        }
        return user;
    }
}   