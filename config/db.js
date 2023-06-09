const mysql = require("mysql");

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "axzsdvcf",
    database: "todos",
});

conn.connect((err) => {
    if (err) throw err;
    console.log("Koneksi Berhasil");
});

module.exports = conn;