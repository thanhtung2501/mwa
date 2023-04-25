import { Router } from "express";
import UserController from "../controllers/userController.js";

const router = Router();

router.post('/login', UserController.login);
router.post('/signup', UserController.signup);
router.get('/:user_id', UserController.getById);

export default router;