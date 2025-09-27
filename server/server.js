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

// ✅ Allowed origins — ✅ सिर्फ frontend वालों को allow करो
const allowedOrigins = [
  "http://localhost:5173",
  "https://zestmart-grocery-client.onrender.com",
];

// ✅ Stripe webhook को express.json() से पहले रखना जरूरी है
app.post("/stripe", express.raw({ type: "application/json" }), stripeWebhooks);

// ✅ CORS middleware
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("❌ Blocked by CORS:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

// ✅ Test route
app.get("/", (req, res) => {
  res.send("API is Working.");
});

// ✅ Routes
app.use("/api/user", UserRouter);
app.use("/api/seller", SellerRouter);
app.use("/api/product", ProductRouter);
app.use("/api/cart", CartRouter);
app.use("/api/address", AddressRouter);
app.use("/api/order", OrderRouter);

// ✅ Server start
const startServer = async () => {
  try {
    await connectDB();
    await connectCloudinary();
    app.listen(port, () => {
      console.log("✅ Server is running on port", port);
    });
  } catch (error) {
    console.log("❌ Error starting server:", error.message);
  }
};

startServer();
