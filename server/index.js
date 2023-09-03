import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import { register } from "./controllers/auth.js";
import { logger } from "./middleware/logger.js";
import { errorHandler } from "./middleware/errorHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*Creating an Express Instance*/
const app = express();
dotenv.config();
/*Connecting the database */
connectDB();
app.use(express.json());
/* logs */
app.use(logger);
/*adds another 15 middleware and protects from common cross site threats*/
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("tiny")); //logs the requests with some information
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/*File Storage */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
});
const upload = multer({ storage });

app.post("/auth/register", upload.single("picture"), register);

/* Error Handler */
app.use(errorHandler);
const port = process.env.PORT || 5050;
//running the server
app.listen(port, () => console.log(`Server port :${port}`));
