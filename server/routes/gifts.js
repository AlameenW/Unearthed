import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import giftData from "../data/giftData.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(giftData);
});

router.get("/api/:giftId", (req, res) => {
  // GET /gifts/api/1 - Return specific gift as JSON
  const giftId = parseInt(req.params.giftId);
  const gift = giftData.find((gift) => gift.id === giftId);

  if (gift) {
    res.status(200).json(gift);
  } else {
    res.status(404).json({ error: "Gift not found" });
  }
});

router.get("/:giftId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/gift.html"));
});

export default router;
