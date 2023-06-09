const express = require("express");
const mysql = require("mysql");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
    console.log(`Request Body: ${JSON.stringify(req.body)}`);
    next();
});

const todos = require("./entities/todos");

const todosRoutes = require("./routes/todosRoutes");
app.use("/api/todos", todosRoutes);

app.listen(6000, () => {
    console.log("Server mlaku ngango port 6000");
});
