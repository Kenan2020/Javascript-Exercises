const mysql = require("mysql")

const con = mysql.createConnection({
    host: "localhost",
    user: "root", //root
    password: "test" //root password
})

con.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("connected to mysql");
        let sql = `CREATE TABLE IF EXISTS \`www\`.\`FBW4_Participants\` (
            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(30) NOT NULL,
            lastname VARCHAR(30) NOT NULL)`

        con.query(sql, (err, result) => {
            if (err) {
                console.log(err.sqlMessage);
            } else {
                console.log("Table created!");
            }
        })
        let info = [{
                name: "ali",
                lastname: "alhayek"
            },
            {
                name: "andri",
                lastname: "Giam"
            },
            {
                name: "Clemens",
                lastname: "B"
            },
            {
                name: "Eren",
                lastname: "Yilmaz"
            },
            {
                name: "Javier",
                lastname: "Montierus"
            }
        ]
        clientInformation.forEach(paticipant => {
            let sql = `INSERT INTO www.FBW4_Participants(name, lastname) VALUES ("${paticipant.name}", "${participant.lastname}")`
            con.query(sql, (err, result) => {
                if (err) {
                    console.log(err.sqlMessage);
                } else {
                    console.log(`Participant ${participant.name} was added!`);
                }
            })
        })
        con.query(`SELECT *- FROM www.FBW4_Participants`, (err, result) => {
            if (err) {
                console.log(err.sqlMessage);
            } else {
                console.log(result);
            }
        })

    }
})