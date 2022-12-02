import express from "express";
import * as dotenv from "dotenv";
import connect from "./config/db.config.js";
import AlbumRouter from "./routes/album.routes.js"
import PurchaseRouter from "./routes/purchase.routes.js"
const app = express();



dotenv.config();
connect();
app.use(express.json());

// SUAS ROTAS AQUI!!! v v v não esqueça de importá-las!

app.use('/albums', AlbumRouter)
app.use('/purchases', PurchaseRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server up and running on port: ${process.env.PORT}!`);
});
