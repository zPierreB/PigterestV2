import bcrypt from 'bcrypt';
import user from '../models/User.js';

class UserController {

    login(req, res) {
        const email = req.body.email; // Email of the form
        const password = req.body.password // Password of the form

        const sql_result = user.getOneByEmail(email);

        console.log(password);
    }

}

export default UserController;