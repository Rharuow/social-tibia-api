import { Router } from "express";
import { RootController } from "./controllers/RootController";
import { CreateUserController } from './controllers/CreateUserController';
import { ensurePermissionRegister } from "./middlewares/ensurePermissionRegister";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { ListUserController } from "./controllers/ListUserController";

const router = Router()

const rootController = new RootController();

//user routes
const createUserController = new CreateUserController()
const deleteUserController = new DeleteUserController()
const listUserController = new ListUserController()

router.get("/", rootController.run)
router.post("/users", ensurePermissionRegister, createUserController.handle)
router.get("/users", listUserController.handle)
router.delete("/users", deleteUserController.handle)

export { router }