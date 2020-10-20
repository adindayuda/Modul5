const db = require("../../config/connection");

module.exports = {
    serviceAddUser: (data, callBack) => {
        db.query(
        `insert into shop(firstName, lastName, gender, email, password, number)
                values (?,?,?,?,?,?)`,
        [
            data.firstName,
            data.lastName,
            data.gender,
            data.email,
            data.password,
            data.number,
        ],
        (error, result) => {
            if (error) {
                return callBack(error);
            } else {
                return callBack(null, result);
            }
        }
        );
    },

    serviceGetUsers: callBack => {
        db.query(`select * from shop`, [], (err, results, fields) => {
            if (err) {
                return callBack(err);
            } else {
                return callBack(null, results);
            }
        });
    },
};