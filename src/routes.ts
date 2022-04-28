import { Router } from "express";

import {AuthenticateUserController} from "./controllers/user/AuthenticateUserController";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { ListUsersController } from "./controllers/user/ListUsersController";
import { DeleteUserController } from "./controllers/user/DeleteUserController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";
import { FindUserByIdController } from "./controllers/user/FindUserByIdController";
import { FindUserByNomeController } from "./controllers/user/FindUserByNomeController";


import { CreateCategoriaController } from "./controllers/categoria/CreateCategoriaController";
import { DeleteCategoriaController } from "./controllers/categoria/DeleteCategoriaController";
import { FindCategoriaByIdController } from "./controllers/categoria/FindCategoriaByIdController";
import { FindCategoriaByNomeController } from "./controllers/categoria/FindCategoriaByNomeController";
import { UpdateCategoriaController } from "./controllers/categoria/UpdateCategoriaController";

import { CreateClienteController } from "./controllers/cliente/CreateClienteController";
import { DeleteClienteController } from "./controllers/cliente/DeleteClienteController";
import { FindClienteByEndercoController } from "./controllers/cliente/FindClienteByEndercoController";
import { FindClienteByIdController } from "./controllers/cliente/FindClienteByIdController";
import { FindClienteByNomeController } from "./controllers/cliente/FindClienteByNomeController";
import { UpdateClienteController } from "./controllers/cliente/UpdateClienteController";

import { CreateProdutoController } from "./controllers/produto/CreateProdutoController";
import { DeleteProdutoController } from "./controllers/produto/DeleteProdutoController";
import { FindProdutoByIdController } from "./controllers/produto/FindProdutoByIdController";
import { FindProdutoByNomeController } from "./controllers/produto/FindProdutoByNomeController";
import { UpdateProdutoController } from "./controllers/produto/UpdateProdutoController";

import { CreateVendaController } from "./controllers/venda/CreateVendaController";
import { DeleteVendaController } from "./controllers/venda/DeleteVendaController";
import { FindVendaByClienteController } from "./controllers/venda/FindVendaByClienteController";
import { FindVendaByIdController } from "./controllers/venda/FindVendaByIdController";
import { FindVendaByProdutoController } from "./controllers/venda/FindVendaByProdutoController";
import { UpdateVendaController } from "./controllers/venda/UpdateVendaController";

import { ensureAdmin} from "./middlewares/ensureAdmin";
import { ensureAuthenticated} from "./middlewares/ensureAuthenticated";

const createUserController  = new CreateUserController();
const listUsersController  = new ListUsersController();
const deleteUserController  = new DeleteUserController();
const updateUserController  = new UpdateUserController();
const findUserByIdController  = new FindUserByIdController;
const findUserByNomeController  = new FindUserByNomeController();

const createCategoriaController  = new CreateCategoriaController();
const deleteCategoriaController  = new DeleteCategoriaController();
const findCategoriaByIdController  = new FindCategoriaByIdController();
const findCategoriaByNomeController  = new FindCategoriaByNomeController();
const updateCategoriaController  = new UpdateCategoriaController();

const createClienteController  = new CreateClienteController();
const deleteClienteController  = new DeleteClienteController();
const findClienteByEndercoController  = new FindClienteByEndercoController();
const findClienteByIdController  = new FindClienteByIdController();
const findClienteByNomeController  = new FindClienteByNomeController();
const updateClienteController  = new UpdateClienteController();

const createProdutoController  = new CreateProdutoController();
const deleteProdutoController  = new DeleteProdutoController();
const findProdutoByIdController  = new FindProdutoByIdController();
const findProdutoByNomeController  = new FindProdutoByNomeController();
const updateProdutoController  = new UpdateProdutoController();

const createVendaController  = new CreateVendaController();
const deleteVendaController  = new DeleteVendaController();
const findVendaByClienteController  = new FindVendaByClienteController();
const findVendaByIdController  = new FindVendaByIdController();
const findVendaByProdutoController  = new FindVendaByProdutoController();
const updateVendaController  = new UpdateVendaController();

const autenticationUserController  = new AuthenticateUserController();


const router = Router();

router.post("/users", createUserController.handle);
router.post("/login", autenticationUserController.handle);

router.get("/categorias/id/:id", findCategoriaByIdController.handle);
router.get("/categorias/nome", findCategoriaByNomeController.handle);

router.get("/produtos/id/:id", findProdutoByIdController.handle);
router.get("/produtos/nome/:nome", findProdutoByNomeController.handle);

router.use(ensureAuthenticated)
router.put("/users", updateUserController.handle);

router.post("/clientes", createClienteController.handle);
router.put("/clientes", updateClienteController.handle);

router.get("/vendas/id/:id", findVendaByIdController.handle);
router.get("/vendas/cliente/:cliente", findVendaByClienteController.handle);
router.get("/vendas/produto/:produto", findVendaByProdutoController.handle);

router.use(ensureAdmin)
router.delete("/users/:id", deleteUserController.handle);
router.get("/users", listUsersController.handle);

router.delete("/clientes/:id", deleteUserController.handle);
router.get("/clientes/id/:id", findClienteByIdController.handle);
router.get("/clientes/nome/:nome", findClienteByNomeController.handle);
router.get("/clientes/endereco", findClienteByEndercoController.handle);

router.delete("/categorias/:id", deleteCategoriaController.handle);
router.post("/categorias", createCategoriaController.handle);
router.put("/categorias", updateCategoriaController.handle);

router.delete("/produtos/:id", deleteProdutoController.handle);
router.post("/produtos", createProdutoController.handle);
router.put("/produtos", updateProdutoController.handle);

router.delete("/vendas/:id", deleteVendaController.handle);
router.post("/vendas", createVendaController.handle);
router.put("/vendas", updateVendaController.handle);

router.get("/users/id/:id", findUserByIdController.handle);
router.get("/users/nome/:nome", findUserByNomeController.handle);
export {router}