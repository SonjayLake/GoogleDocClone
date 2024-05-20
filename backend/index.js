const express = require("express");

app = express();
const port = 4000;


app.get("/",(req,res) => {
    console.log("Backend working");
    res.send("Backend working");
})

app.listen(port, () => {
    console.log(`Server started, listening on port ${port}`)
})