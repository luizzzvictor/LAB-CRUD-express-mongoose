import { model, Schema } from "mongoose";

const AlbumSchema = new Schema (
{
    performer: String,
    title: String,
    cost: Number
}
)

const AlbumModel = model("Album", AlbumSchema)

export default AlbumModel