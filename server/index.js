const express = require("express");
const app = express();
const userRoute = require("./routes/User");
const postRoutes = require("./routes/Post");
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 4000;

//database connect
database.connect();

//middlewares;
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

cloudinaryConnect();

//routes
app.use("/api/v1/auth", userRoute);
app.use("/api/v1/post", postRoutes);

//def routes

app.get("/", (req, res) => {
  res.send("<h1>Social Monkey</h1>");
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
