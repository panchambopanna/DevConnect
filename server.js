const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000; //On Heroku it will use a diff port but on local if there is nothing available then uses port 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
