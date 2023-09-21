import express from "npm:express@^4.18";
import helmet from "npm:helmet@^7.0.0";
import cors from "npm:cors@^2.8.5";
import morgan from "npm:morgan@^1.10";
import { load } from "https://deno.land/std/dotenv/mod.ts";
import cookieParser from "npm:cookie-parser@^1.4.6";
import connectDB from "./config/db.js";
import { logger } from "./middleware/logger.js";
import { errorHandler } from "./middleware/errorHandler.js";
import userRoutes from "./routes/userRoutes.js";
// import productRoutes from "./routes/productRoutes.js";
import multer from "npm:multer@^1.4.5-lts.1";
// import { createProduct } from "./controllers/product.js";
import * as path from "https://deno.land/std/path/mod.ts";
import { updateImage } from "./controllers/auth.js";
/*Creating an Express Instance*/
const app = express();
const env = await load();
/*Connecting the database */
connectDB();
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
app.post(
  "/api/auth/updateImage/:id",
  upload.single("image"),
  updateImage
);
app.use("/api/auth", userRoutes);
app.use(multerErrorHandler);

// app.use("/api/product", productRoutes);

// app.post("/api/createProduct", upload.single("image"), createProduct);
/* Error Handler */
app.use(errorHandler);
// const port = process.env.PORT || 5050;
const port = env["PORT"] || 5050;
//running the server
app.listen(port, () => console.log(`Server port :${port}`));
