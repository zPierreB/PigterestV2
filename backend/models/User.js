import dotenv from 'dotenv';
dotenv.config();

import sql from '../config/dbConnection.js';

class User {
    /**
     * 
     * @param {*} username / username of the user
     * @param {*} email / email of the user
     * @param {*} password / password of the user
     */
    constructor(username, email, password) {
        this.username = username,
        this.email = email,
        this.password = password
    }

    /**
     * Get all the user from the database
     */
    getAll() {
        const sql_request = "SELECT * FROM Users";
        try {
            return sql.query(sql_request);
        } catch (error) {
            throw error;
        }
    }

    /**
     * 
     * @param {*} email  Email of the user in the database
     * @returns 
     */
    getOneByEmail(email) {
        const sql_request = "SELECT * FROM Users WHERE email = ?";
        try {
            return sql.sql(sql_request, email)
        } catch (error) {
            throw error;
        }
    }
    
    // login() {
    //     const password = "coucou";
    //     const salt = parseInt(process.env.PSWD_SALT);

    //     const hashedPassword = bcrypt.hashSync(password, salt);
    //     console.log(hashedPassword);
    // }

}

export default User;