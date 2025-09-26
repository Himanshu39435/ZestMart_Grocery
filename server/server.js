import "dotenv/config.js";
import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import connectDB from "./configs/db.js";

import UserRouter from "./routes/UserRoute.js";
import SellerRouter from "./routes/SellerRoute.js";
import connectCloudinary from "./configs/cloudinary.js";
import ProductRouter from "./routes/ProductRoute.js";
import CartRouter from "./routes/CartRoute.js";
import AddressRouter from "./routes/AddressRoute.js";
import OrderRouter from "./routes/OrderRoute.js";
import { stripeWebhooks } from "./controllers/OrderController.js";

const app = express();
const port = process.env.PORT || 4000;

// Allowed multiple origins
const allowedOrigins = ['http://localhost:5173']

app.post('/stripe', express.raw({type: 'application/json'}), stripeWebhooks);

// MiddleWare configuration

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

 app.get("/", (req, res) => {
   res.send("API is Working.");
 });
 
 app.use("/api/user", UserRouter);
 app.use("/api/seller", SellerRouter);
 app.use("/api/product", ProductRouter);
 app.use("/api/cart", CartRouter);
 app.use("/api/address", AddressRouter);
 app.use("/api/order", OrderRouter);
 


 const startServer = async () => {
   try {
     await connectDB();
     await connectCloudinary();
     app.listen(port, () => {
       console.log("Server is running on port", port);
     });
   } catch (error) {
     console.log(error.message);
   }
 };
 
 startServer();
