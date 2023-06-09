const conn = require("../config/db");

const todos = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            conn.query("SELECT * FROM todolist", (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },
    getById: (id) => {
        return new Promise((resolve, reject) => {
            conn.query(
                "SELECT * FROM todolist WHERE id = ?",
                [id],
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },
    add: (data) => {
        return new Promise((resolve, reject) => {
            conn.query(`INSERT INTO todolist SET ?`, data, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },
    update: (id, data) => {
        return new Promise((resolve, reject) => {
            let sql = "UPDATE todolist SET name = ?, status = ? WHERE id = ?";
            conn.query(sql, [data.name, data.status, id], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },
    delete: (id) => {
        return new Promise((resolve, reject) => {
            let sql = `DELETE FROM todolist WHERE id=?`;
            conn.query(sql, [id], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },
};

module.exports = todos;
