import { Router } from "express";
import { RootController } from "./controllers/RootController";
import { CreateUserController } from './controllers/User/CreateUserController';
import { ensurePermissionRegister } from "./middlewares/ensurePermissionRegister";
import { DeleteUserController } from "./controllers/User/DeleteUserController";
import { ListUserController } from "./controllers/User/ListUserController";
import { CreateCharController } from './controllers/Char/CreateCharController';
import { ListCharController } from './controllers/Char/ListCharController';
import { ListCharsByUserController } from './controllers/User/ListCharsByUserController';

const router = Router()

const rootController = new RootController();

//user routes
const createUserController = new CreateUserController()
const deleteUserController = new DeleteUserController()
const listUserController = new ListUserController()
const listCharsByUserController = new ListCharsByUserController()

//chars routes
const createCharController = new CreateCharController()
const listCharController = new ListCharController()


router.get("/", rootController.run)
router.post("/users", ensurePermissionRegister, createUserController.handle)
router.get("/users", listUserController.handle)
router.delete("/users", deleteUserController.handle)

router.get("/users/:id/chars", listCharsByUserController.handle)

router.get("/chars", listCharController.handle)
router.post("/chars", createCharController.handle)

export { router }