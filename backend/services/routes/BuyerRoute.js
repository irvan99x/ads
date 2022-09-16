import express from "express";
import { getBuyers, 
    getBuyerById,
    createBuyer,
    updateBuyer,
    deleteBuyer } from "../controllers/BuyerController.js";

const router = express.Router();

router.get('/buyers', getBuyers);
router.get('/buyers/:id', getBuyerById);
router.post('/buyers', createBuyer);
router.patch('/buyers/:id', updateBuyer);
router.delete('/buyers/:id', deleteBuyer);

export default router;