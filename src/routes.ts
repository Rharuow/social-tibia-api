import { Router } from "express";
import { RootController } from "./controllers/RootController";
import { CreateUserController } from './controllers/CreateUserController';

const router = Router()

const rootController = new RootController();
const createUserController = new CreateUserController()

router.get("/", rootController.run)
router.post("/users", createUserController.handle)

export { router }