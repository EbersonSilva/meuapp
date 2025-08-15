import {Router } from "express" 
import { CreateUserController } from "./controller/user/CreateUserController"

const createUserController = new CreateUserController();

export const router = Router();
router.post("/users", createUserController.handle); // Rota para criar um usuário


//esse arquivo define e exporta as rotas da sua aplicação, conectando o caminho users ao controlador que cria usuários.