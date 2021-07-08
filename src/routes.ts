import { Router } from "express";
import { RootController } from "./controllers/RootController";

const router = Router()

const rootController = new RootController();

router.get("/", rootController.run)

export { router }