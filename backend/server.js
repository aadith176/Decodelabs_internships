const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// TEST API
app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

// LOGIN API
app.post("/login", (req, res) => {

    const { username, password } = req.body;

    if (password === "student123") {
        res.json({
            status: "success",
            role: "student",
            username: username
        });
    }

    else if (password === "teacher123") {
        res.json({
            status: "success",
            role: "teacher",
            username: username
        });
    }

    else {
        res.json({
            status: "fail",
            message: "Invalid credentials"
        });
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});