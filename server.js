const express = require("express");
const app = express();
const connectDB = require("./config/db");
const path = require("path");

//Connect database
connectDB();

// Init Middleware - This is so that we can use body in our request
app.use(express.json({ extended: false }));

//Define Routes - Here we define all the routes and the folder that contains its other informations
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (res, req) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000; //On Heroku it will use a diff port but on local if there is nothing available then uses port 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
