import { Router } from "express";
import { RootController } from "./controllers/RootController";
import { CreateUserController } from './controllers/User/CreateUserController';
import { ensurePermissionRegister } from "./middlewares/ensurePermissionRegister";
import { DeleteUserController } from "./controllers/User/DeleteUserController";
import { ListUserController } from "./controllers/User/ListUserController";
import { CreateCharController } from './controllers/Char/CreateCharController';
import { ListCharController } from './controllers/Char/ListCharController';
import { ListCharsByUserController } from './controllers/User/ListCharsByUserController';
import { CreateRequirimentController } from './controllers/Requiriment/CreateRequirimentController';
import { ListRequirimentController } from './controllers/Requiriment/ListRequirimentContorller';
import { ListRequirimentByCharController } from './controllers/Requiriment/ListRequirimentByCharController';

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

//requiriments
const createRequirimentController = new CreateRequirimentController()
const listRequirimentController = new ListRequirimentController()
const listRequirimentByCharController = new ListRequirimentByCharController()


router.get("/", rootController.run)
router.post("/users", ensurePermissionRegister, createUserController.handle)
router.get("/users", listUserController.handle)
router.delete("/users", deleteUserController.handle)

router.get("/users/:id/chars", listCharsByUserController.handle)

router.get("/chars", listCharController.handle)
router.post("/chars", createCharController.handle)

router.post("/requiriments", createRequirimentController.handle)
router.get("/requiriments", listRequirimentController.handle)
router.get("/requiriments/:id", listRequirimentByCharController.handle)

export { router }