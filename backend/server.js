const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const app = express();

app.use(cors());
app.use(express.json());


// TEST API
app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});


// LOGIN API
app.post("/login", async (req, res) => {

    const { username, password } = req.body;

    try {

        const db = await connectDB();

        const user = await db.collection("users").findOne({
            username: username,
            password: password
        });

        if (user) {

            res.json({
                status: "success",
                role: user.role,
                username: user.username
            });

        } else {

            res.json({
                status: "fail",
                message: "Invalid credentials"
            });

        }

    } catch (error) {

        console.error(error);

        res.status(500).json({
            status: "error",
            message: "Server Error"
        });

    }

});


// GET SINGLE STUDENT
app.get("/student/:username", async (req, res) => {

    try {

        const db = await connectDB();

        const student = await db.collection("students").findOne({
            username: req.params.username
        });

        if (student) {

            res.json(student);

        } else {

            res.status(404).json({
                message: "Student not found"
            });

        }

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

});


// GET ALL STUDENTS
app.get("/students", async (req, res) => {

    try {

        const db = await connectDB();

        const students = await db
            .collection("students")
            .find({})
            .toArray();

        res.json(students);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

});


// UPDATE STUDENT
app.put("/student/:username", async (req, res) => {

    console.log("PUT request received for:", req.params.username);
    console.log(req.body);

    try {

        const db = await connectDB();

        const username = req.params.username;

        const {
            attendance,
            result,
            courses,
            timetable
        } = req.body;

        const updateResult = await db.collection("students").updateOne(
            { username: username },
            {
                $set: {
                    attendance,
                    result,
                    courses,
                    timetable
                }
            }
        );

        console.log(updateResult);

        res.json({
            status: "success",
            message: "Student updated successfully"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            status: "error",
            message: "Server Error"
        });

    }

});


// START SERVER
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});