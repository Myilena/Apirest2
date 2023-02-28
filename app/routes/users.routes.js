import { Router } from "express";
import * as usercontroller from "../controllers/users.controller";
const router = Router();


router.post('/', usercontroller.createUser);

router.get('/', );

router.get('/ping', );

router.get('/:id', );

router.put('/:id', );

router.delete('/:id', );

export default router;