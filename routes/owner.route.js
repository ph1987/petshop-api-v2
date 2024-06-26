import express from "express";
import OwnerController from "../controllers/owner.controller.js";

const router = express.Router();

router.post("/", OwnerController.createOwner);
router.get("/", OwnerController.getOwners);
router.get("/:id", OwnerController.getOwner);
router.delete("/:id", OwnerController.deleteOwner);
router.put("/:id", OwnerController.updateOwner);

export default router;