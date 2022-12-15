import mysql from "mysql2";
import dotenv from 'dotenv';
dotenv.config();

/**
 * 
 * @param {*} sql_request The sql request with ? as value
 * @param {*} param (Optional) A parameter 
 * @returns { mysql.QueryError || mysql.RowDataPacket[] }
 *   - On Failure : return a mysql.QueryError
 *   - on Success : return the result in an array
 */
const sql = (sql_request, param = []) => {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PSWD,
        database: process.env.DB_NAME
    });

    return new Promise((resolve, reject) => {
        connection.connect((error) => {
            if ( error ) {
                console.log( error.message )
            } else {
                connection.query(sql_request, param, (err, result) => {
                    if(err) {
                        reject(new Error(err));
                    }
                    resolve(result)
                });
            }
        });
    })

    
}

export default { sql };