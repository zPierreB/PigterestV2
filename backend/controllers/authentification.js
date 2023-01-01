import bcrypt from 'bcrypt';
import session from 'express-session';

import User from '../models/User.js';

class UserController {

    static async login(req, res) {
        const email = req.body.email; // Email of the form
        const password = req.body.password // Password of the form

        const saltRounds = 10;

        const hashedPassword = bcrypt.hashSync(password, saltRounds);

        if (email && password) {
            const sql_result = await User.getOneByEmail(email);

            if (sql_result.length == 0) {
                console.log("Wrong credentials")
            }

            console.log(sql_result[0]);

            if (bcrypt.compareSync(hashedPassword, sql_result[0].password)) {
                console.log("Wrong password");
            }

            const session = req.session;
            session.isLogged = true;
            return res.redirect('/user');
        }
        // res.json(sql_result);
    }

}

export default UserController;