import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
interface IAuthenticateRequest{
    email: string;
    password: string;
}

export class AuthenticatedUserService{
    async execute({ email, password }: IAuthenticateRequest) {
        const passwordtemp = await hash( "1234", 8);
        console.log(passwordtemp);
        const passwordMatch = await compare(password, passwordtemp);
        if (!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }
        const token = sign(
            {
                email: email,
            },
            "123456",
            {
                subject: "Admin",
                expiresIn: "1d"
            }
        );
        return token;
    }

}