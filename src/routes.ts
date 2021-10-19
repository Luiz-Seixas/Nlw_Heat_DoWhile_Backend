import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

const router = Router();

// o method handle recebe um req e um res, porém como está sendo usado na exec da rota ele fica sendo usado como um middleware e o express repassa os parâmetros automaticamente.
router.post("/authenticate", new AuthenticateUserController().handle);

export { router };
