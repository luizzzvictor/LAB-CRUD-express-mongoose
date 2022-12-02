import express from "express";
import AlbumModel from "../models/album.model.js";

const router = express.Router();

router.post("/postalbum", async (req, res) => {
  try {
    const newAlbum = await AlbumModel.create(req.body);

    return res.status(201).json(newAlbum);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Smth's wrong" });
  }
});
router.get("/", async (req, res) => {
  try {
    const getAllAlbums = await AlbumModel.find();

    return res.status(200).json(getAllAlbums);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Smth's wrong" });
  }
});
router.get("/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;

    const getAlbum = await AlbumModel.findById(albumId);

    return res.status(200).json(getAlbum);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Smth's wrong" });
  }
});
router.put("/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;

    const attAlbum = await AlbumModel.findByIdAndUpdate(
      albumId,
      { ...req.body },
      { new: true, runValidators: true }
    );

    return res.status(200).json(attAlbum);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Smth's wrong" });
  }
});
router.delete("/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;
    const deleteAlbum = await AlbumModel.findByIdAndDelete(albumId)
    return res.status(200).json(deleteAlbum)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Smth's wrong" });
  }
});

export default router