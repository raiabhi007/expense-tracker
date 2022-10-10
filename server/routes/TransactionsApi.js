import { Router } from "express"
import passport from "passport";
import Transaction from '../models/Transaction.js';
import * as TransactionController from "../controller/TransactionController.js"
const router = Router();

router.get('/',

TransactionController.index
);

router.post("/",TransactionController.create);

router.delete("/:id", TransactionController.destroy);

router.patch('/:id', TransactionController.update);

export default router;