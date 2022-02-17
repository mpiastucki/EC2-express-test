require('dotenv').config();
const express = require('express');
const res = require('express/lib/response');
const PORT = process.env.PORT;

const app = express();


app.get("/", () => {
    res.status(200).send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})