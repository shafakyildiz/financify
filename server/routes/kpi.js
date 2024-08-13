import express from "express";
import KPI from "../models/KPI.js";

const router = express.Router();

router.get("/kpis", async (req, res) => {
  try {
    const kpis = await KPI.find();
  } catch (error) {
    res.status.json({ message: error.message });
  }
});

export default router;
