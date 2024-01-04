const express = require("express");
const app = express();

require("dotenv").config();
const dbConnect = require("./Config/Database");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const authRoutes = require("./Routes/authRoutes");
const notesRoutes = require("./Routes/noteRoutes");

// Import the port from .env
const PORT = process.env.PORT || 4000;

// rate limiting the API requests of eaach IP to 100 requests per 15 minitues to all the api routes
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, 
	standardHeaders: 'draft-7',
	legacyHeaders: false, 
});


// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(limiter);

app.use(
    cors(
        {
            origin: "*",
            credentials: true,
        }
    )
);

// mount all the api routes
app.use("/api/auth", authRoutes);
app.use("/api", notesRoutes);

// DB Connection
dbConnect();

// Listen to Server at PORT
app.listen(PORT, () => {
    console.log(`Server is up and runnning on PORT ${PORT}`);
});


// Default Route
app.get("/", (req, res) => {
    res.send("<h1>This is the home route</h1>");
});