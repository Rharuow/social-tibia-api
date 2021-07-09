import { Router } from "express";
import { RootController } from "./controllers/RootController";
import { CreateUserController } from './controllers/CreateUserController';
import { ensurePermissionRegister } from "./middlewares/ensurePermissionRegister";

const router = Router()

const rootController = new RootController();
const createUserController = new CreateUserController()

router.get("/", rootController.run)
router.post("/users", ensurePermissionRegister, createUserController.handle)

export { router }