import {Router } from "express" 
import { CreateUserController } from "./controller/user/CreateUserController"
import { ListUsersController } from "./controller/user/ListUserController";
import { DeleteUserController } from "./controller/user/DeleteUserController";
import { UpdateUserController } from "./controller/user/UpdateUserController";

const createUserController = new CreateUserController();
const listUserController = new ListUsersController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();


export const router = Router();
router.post("/users", createUserController.handle); // Rota para criar um usuário
router.get("/users", listUserController.handle)
router.delete("/users/:id", deleteUserController.handle)
router.put("/users/:id", updateUserController.handle)


//esse arquivo define e exporta as rotas da sua aplicação, conectando o caminho users ao controlador que cria usuários.