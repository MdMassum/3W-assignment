require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser =require('cookie-parser')
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");

// handling uncaught exception
process.on("uncaughtException",(err)=>{
    console.log(`Error : ${err.message}`)
    console.log("Shutting down the server due to uncaught exception")

    server.close(()=>{
        process.exit(1);
    })
})

// Initialize app
const app = express();
connectDB();


// Middleware

app.use(cors({
    // origin:'http://localhost:5173/',
    origin:'https://3-w-assignment-zo1b.vercel.app/',     // frontend url
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma",
      ],
    credentials: true
}))

app.use(cookieParser());
app.use(bodyParser.json());

// Routes
app.get('/',(req,res)=>{
    res.json({
        message:"Server Running"
    })
})
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);

// Start server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


// handling unhandled promise rejection
process.on("unhandledRejection",(err)=>{
    console.log(`Error : ${err.message}`)
    console.log("Shutting down the server due to unhandled Promise Rejection")

    server.close(()=>{
        process.exit(1);
    })
})