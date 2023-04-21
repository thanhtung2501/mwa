import jwt from 'jsonwebtoken';

const CheckToken = {
    validateToken: function (req, res, next) {
        try {
            const token = req.headers['authorization'];
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