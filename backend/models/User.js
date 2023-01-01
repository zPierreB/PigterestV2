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
    static getAll() {
        const sql_request = "SELECT * FROM users";
        try {
            return sql.sql(sql_request);
        } catch (error) {
            throw error;
        }
    }

    /**
     * Get an user from the database with the same email where email has the same value as the argument.
     * @param {*} email  Email of the user in the database
     * @returns 
     */
    static getOneByEmail(email) {
        const sql_request = "SELECT * FROM users WHERE email = ?";
        try {
            return sql.sql(sql_request, email)
        } catch (error) {
            throw error;
        }
    }
}

export default User;