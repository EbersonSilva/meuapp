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
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";


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

router.post("/login", authenticatedUserController.handle); // Rota pública para autenticação de usuário
router.post("/users", createUserController.handle); // Rota pública para criar um usuário

// Rotas protegidas que exigem autenticação
router.get("/users", ensureAuthenticated, listUserController.handle); // Rota para listar usuários
router.delete("/users/:id", ensureAuthenticated, deleteUserController.handle); // Rota para deletar um usuário
router.put("/users/:id", ensureAuthenticated, updateUserController.handle); // Rota para atualizar um usuário

router.post("/products", ensureAuthenticated, createProductController.handle); // Rota para criar um produto
router.get("/products", ensureAuthenticated, listProductsController.handle);
router.delete("/products/:id", ensureAuthenticated, deleteProductController.handle);
router.put("/products/:id", ensureAuthenticated, updateProductController.handle);

router.post("/clients", ensureAuthenticated, createClientController.handle);
router.get("/clients", ensureAuthenticated, listClientController.handle);
router.delete("/clients/:id", ensureAuthenticated, deleteClientController.handle);
router.put("/clients/:id", ensureAuthenticated, updateClientController.handle);

router.post("/sales", ensureAuthenticated, createSalesController.handle);
router.get("/sales", ensureAuthenticated, listSalesController.handle);
router.delete("/sales/:id", ensureAuthenticated, deleteSalesController.handle);
router.put("/sales/:id", ensureAuthenticated, updateSalesController.handle);

router.post("/categories", ensureAuthenticated, createCategoryController.handle);
router.get("/categories", ensureAuthenticated, listCategoryController.handle);
router.delete("/categories/:id", ensureAuthenticated, deleteCategoryController.handle);
router.put("/categories/:id", ensureAuthenticated, updateCategoryController.handle);