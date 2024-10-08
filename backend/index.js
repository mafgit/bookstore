const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
require("dotenv").config();

const authRoute = require("./routes/auth.js");
const booksRoute = require("./routes/books.js");
const ordersRoute = require("./routes/orders.js");

const app = express();

// app.set("trust proxy");
// app.enable("trust proxy");

app.use(
  cors({
    origin: ["http://127.0.0.1:3000", "http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT"],
    // optionsSuccessStatus: 200,
    // exposedHeaders: ["Set-Cookie"],
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
      ttl: 24 * 60 * 60, // 1 day
      autoRemove: "native",
    }),
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

//middlewares
app.use("/api/auth", authRoute);
app.use("/api/books", booksRoute);
app.use("/api/orders", ordersRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server: http://127.0.0.1:${PORT}`));
