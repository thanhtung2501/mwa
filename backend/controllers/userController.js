import User from "../models/userModel.js";

const UserController = {
    login: async function (req, res, next) {
        try {

        } catch (error) {
            next(error);
        }
    },

    signup: async function (req, res, next) {
        try {
            const newUser = req.body;
        } catch (error) {
            next(error);
        }
    }
};

export default UserController;