import express from "express";
import PurchaseModel from "../models/purchase.model.js";

const router = express.Router();

router.post("/newpurchase", async (req, res) => {
  try {
    const newPurchase = await PurchaseModel.create(req.body);
    return res.status(201).json(newPurchase);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Smth's wrong" });
  }
});

router.get("/:purchaseId", async (req, res) => {
  try {
    const {purchaseId} = req.params
    const getPurchase = await PurchaseModel.findById(purchaseId).populate("album")
    return res.status(200).json(getPurchase)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Smth's wrong" });
  }
});

export default router