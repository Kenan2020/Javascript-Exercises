const mysql = require("mysql")

const con = mysql.createConnection({
    host: "localhost",
    user: "demo", //root
    password: "Test1234#" //root password
})

con.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("connected!");
        con.query(`CREATE DATABASE IF NOT EXISTS \`www\``, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Database created!");
            }
        })

        con.query(`CREATE TABLE IF EXISTS \`www\`.\`users\` (
            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(30) NOT NULL,
            fullname VARCHAR(30) NOT NULL,
            password VARCHAR(100) NOT NULL)`, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Table created!");
            }
        })
        // con.query(`SELECT * FROM www.users `, (err, result) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log(result);
        //     }
        // })
        // con.query(`INSERT INTO www.users(username, fullname, password) VALUES ("adminuser", "admin", "admin")`, (err, result) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log(result);
        //     }
        // })
    }
})