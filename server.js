const express = require("express");
const app = express();
const connectDB = require("./config/db");

//Connect database
connectDB();

//This is used to check if we cna make API requests
app.get("/", (req, res) => res.send("API Running"));

//Define Routes - Here we define all the routes and the folder that contains its other informations
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000; //On Heroku it will use a diff port but on local if there is nothing available then uses port 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
