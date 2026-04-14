const express = require("express");
const mysql = require("mysql2");

const app = express();

// AIVEN DATABASE CONNECTION
const db = mysql.createConnection({
  host: "nodejs-mysql-lab-anoracatherine26-5ffe.l.aivencloud.com",
  user: "avnadmin",
  password: "AVNS_m148CTHETPnCVmS_ZOw",
  database: "defaultdb",
  port: 28066
});

app.get("/", (req, res) => {
  db.query("SELECT NOW()", (err, result) => {
    if (err) return res.send("Database connection error");
    res.send("Database Connected Successfully: " + result[0]["NOW()"]);
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server on port " + PORT);
});
