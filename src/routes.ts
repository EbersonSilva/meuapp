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

import { CreateClientController } from "./controller/client/CreateClientController";
import { DeleteClientController } from "./controller/client/DeleteClientController";
import { ListClientController } from "./controller/client/ListClientController";
import { UpdateClientController } from "./controller/client/UpdateClientController";

import { CreateSalesController} from "./controller/sales/CreateSalesController";
import {UpdateSalesController} from "./controller/sales/UpdateSalesController";
import { DeleteSalesController} from "./controller/sales/DeleteSalesController";
import { ListSalesController } from "./controller/sales/ListSalesController";

import { CreateCategoryController } from "./controller/category/CreateCategoryController";
import { UpdateCategoryController } from "./controller/category/UpdateCategoryController";
import { ListCategoryController } from "./controller/category/ListCategoryController";
import { DeleteCategoryController } from "./controller/category/DeleteCategoryController";
import { AuthenticatedUserController } from "./controller/autenticated/AuthenticatedUserController";


//instancias do user
const createUserController = new CreateUserController();
const listUserController = new ListUsersController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();
const authenticatedUserController = new AuthenticatedUserController();

//instancias do product
const createProductController = new CreateProductController();
const listProductsController = new ListProductsController();
const deleteProductController = new DeleteProductController();
const updateProductController = new UpdateProductController();

//instancias do client
const createClientController = new CreateClientController();
const deleteClientController = new DeleteClientController();
const listClientController = new ListClientController();
const updateClientController = new UpdateClientController();

//instancias do sales
const createSalesController = new CreateSalesController();
const updateSalesController = new UpdateSalesController();
const deleteSalesController = new DeleteSalesController();
const listSalesController = new ListSalesController();

//instancias do category
const createCategoryController = new CreateCategoryController();
const updateCategoryController = new UpdateCategoryController();
const listCategoryController = new ListCategoryController();
const deleteCategoryController = new DeleteCategoryController();

export const router = Router();

router.post("/login", authenticatedUserController.handle); // Rota para autenticação de usuário

router.post("/users", createUserController.handle); // Rota para criar um usuário
router.get("/users", listUserController.handle)
router.delete("/users/:id", deleteUserController.handle)
router.put("/users/:id", updateUserController.handle)

router.post("/products", createProductController.handle); // Rota para criar um produto
router.get("/products", listProductsController.handle);
router.delete("/products/:id", deleteProductController.handle);
router.put("/products/:id", updateProductController.handle);

router.post("/clients", createClientController.handle);
router.get("/clients", listClientController.handle);
router.delete("/clients/:id", deleteClientController.handle);
router.put("/clients/:id", updateClientController.handle);

router.post("/sales", createSalesController.handle);
router.get("/sales", listSalesController.handle);
router.delete("/sales/:id", deleteSalesController.handle);
router.put("/sales/:id", updateSalesController.handle);

router.post("/categories", createCategoryController.handle);
router.get("/categories", listCategoryController.handle);
router.delete("/categories/:id", deleteCategoryController.handle);
router.put("/categories/:id", updateCategoryController.handle);