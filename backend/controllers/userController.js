import User from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const UserController = {
    login: async function (req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (user) {
                const match = await bcrypt.compare(password, user.password);
                if (match) {
                    const jwtToken = jwt.sign({
                        ...user,
                        password: ''
                    }, process.env.JWT_SECRET_KEY);

                    res.json({
                        success: true,
                        data: jwtToken
                    });
                } else {
                    next(new Error('Wrong password'));
                }
            } else {
                next(new Error('User not found'));
            }
        } catch (error) {
            next(error);
        }
    },

    signup: async function (req, res, next) {
        try {
            const newUser = req.body;
            const { password: plainPassword } = newUser;
            const hashPassword = await bcrypt.hash(plainPassword, 10);

            const result = await User.create({
                ...newUser,
                password: hashPassword
            });

            res.json({
                success: true,
                data: result
            });
        } catch (error) {
            next(error);
        }
    }
};

export default UserController;