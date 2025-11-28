import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoDB from "./config/mongoDB.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./route/userRout.js";
import productRouter from "./route/productRout.js";
import cartRouter from "./route/cartRout.js";
import orderRouter from "./route/orderRout.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
// app.use(cors({ credentials: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "https://p-e-commerce-5-frontend.onrender.com", // your frontend
      "http://localhost:5173",
      "http://localhost:5173", // for testing
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
mongoDB();
connectCloudinary();

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/orders", orderRouter);

app.listen(PORT,'0.0.0.0', () => {
  console.log(`server is liten on  http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  return res.send("backend is working ");
});
