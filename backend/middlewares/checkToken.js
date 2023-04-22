import jwt from 'jsonwebtoken';

const CheckToken = {
    validateToken: async function (req, res, next) {
        try {
            const header = req.headers['authorization'];
            const token = header.split(' ')[1];
            if (token) {
                const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
                if (decodedToken) {
                    req.token = decodedToken;
                    next();
                } else {
                    next(new Error('Invalid token'));
                }
            }
        } catch (error) {
            next(new Error('Token not found'));
        }
    }
};

export default CheckToken;