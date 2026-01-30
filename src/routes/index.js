import { Router } from "express";
import { healthCheck } from "../controllers/health.controller.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const router = Router();

router.get("/health", asyncHandler(healthCheck));

router.get("/boom", asyncHandler(async (req, res) => {
    throw new Error("Boom! Something went wrong.");
}));

export default router;