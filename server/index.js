import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import connectDB from "./config/Config.js";
import { logger } from "./middleware/logger.js";
import { errorHandler } from "./middleware/errorHandler.js";
import userRoutes from "./routes/UserRoutes.js";
import otpRoutes from "./routes/OtpRoutes.js";
// import productRoutes from "./routes/productRoutes.js";
import multer from "multer";
// import { createProduct } from "./controllers/product.js";
import { updateImage } from "./controllers/Auth.js";
/*Creating an Express Instance*/
const app = express();

app.use(express.json());
/*Cookie-parser */
app.use(cookieParser());
/* logs */
app.use(logger);
/*adding the helmet middleware */
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
/*adds another 15 middleware and protects from common cross site threats*/
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("tiny")); //logs the requests with some information
app.use(express.urlencoded({ extended: true })); // Handle form data
app.use(cors());

/* Setting up the multer storage and the multer to upload the images */
const storage = multer.memoryStorage();
const upload = multer({ storage });

function multerErrorHandler(err, req, res, next) {
  if (err instanceof multer.MulterError) {
    // Handle multer errors here
    res.status(400).json({ message: "Multer error: " + err.message });
  } else {
    // Pass other errors to the global error handler
    next(err);
  }
}
/* Routes */
app.post("/api/auth/updateImage/:id", upload.single("image"), updateImage);
app.use("/api/auth", userRoutes);
app.use("/api/auth/otp", otpRoutes);
app.use(multerErrorHandler);

// app.use("/api/product", productRoutes);

// app.post("/api/createProduct", upload.single("image"), createProduct);
/* Error Handler */
app.use(errorHandler);
const port = process.env.PORT || 5050;
//running the server
app.listen(port, () => console.log(`🚀 server at http://localhost:${port}.`));
/*Connecting the database */
connectDB();
