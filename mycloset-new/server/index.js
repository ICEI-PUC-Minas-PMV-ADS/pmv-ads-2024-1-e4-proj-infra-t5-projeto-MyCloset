require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./app");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const pictureRouter = require("./routes/picture.route");



// database connectio
connection();

// middlewares
app.use(express.json());
app.use(cors());
const multer = require("multer");

const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

module.exports = upload;


// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/pictures", pictureRouter);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
