import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

class User {
    constructor(username, email, password) {
        this.username = username,
        this.email = email,
        this.password = password
    }

    login(req, res) {
        // const email = req.b
        // const password = this.password;
        const password = "coucou";
        const salt = parseInt(process.env.PSWD_SALT);

        const hashedPassword = bcrypt.hashSync(password, salt);
        console.log(hashedPassword);
    }


}

export default User;