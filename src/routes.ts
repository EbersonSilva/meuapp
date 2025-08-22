//esse arquivo define e exporta as rotas da sua aplicação.
import {Router } from "express" 
//Importacoes do User
import { CreateUserController } from "./controller/user/CreateUserController"
import { ListUsersController } from "./controller/user/ListUserController";
import { DeleteUserController } from "./controller/user/DeleteUserController";
import { UpdateUserController } from "./controller/user/UpdateUserController";

import { CreateProductController } from "./controller/product/CreateProductController";
import { ListProductsController } from "./controller/product/ListProductController";
import { DeleteProductController } from "./controller/product/DeleteProductController";
import { UpdateProductController } from "./controller/product/UpdateProductController";

//estancias do user 
const createUserController = new CreateUserController();
const listUserController = new ListUsersController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();

//estancias do product
const createProductController = new CreateProductController();
const listProductsController = new ListProductsController();
const deleteProductController = new DeleteProductController();
const updateProductController = new UpdateProductController();



export const router = Router();
router.post("/users", createUserController.handle); // Rota para criar um usuário
router.get("/users", listUserController.handle)
router.delete("/users/:id", deleteUserController.handle)
router.put("/users/:id", updateUserController.handle)

router.post("/products", createProductController.handle); // Rota para criar um produto
router.get("/products", listProductsController.handle);
router.delete("/products/:id", deleteProductController.handle);
router.put("/products/:id", updateProductController.handle);