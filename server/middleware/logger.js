//os is a node module to provide information about the computer operating system
//fs is a node module to access the file

import { format } from "date-fns";
import path from "path";
import fs from "fs";
const fsPromises = fs.promises;
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const logEvents = async (message, logFileName) => {
  const dateTime = format(new Date(), "yyyyMMdd\tHH:MM:ss");
  const logItem = `${dateTime}\t${message}`;
  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "..", "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "..", "logs", logFileName),
      logItem
    );
  } catch (error) {
    console.log(error.message);
  }
};
export const logger = (req, res, next) => {
  logEvents(`${req.method}\t${req.url}\t${req.headers.origin}\n`, "reqLog.log");
  console.log(`${req.method} ${req.path}`);
  next();
};
