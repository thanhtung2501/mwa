import express, { json } from "express";
import mongoose from "mongoose";
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import imageRouter from './routes/imageRouters.js';
import userRouter from './routes/userRouter.js';
import checkToken from './middlewares/checkToken.js';
import animalRouter from './routes/animalReportRouter.js';

// init
const app = express();

await mongoose.connect(`mongodb://localhost:27017/mwa`)
// await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.pws1p.mongodb.net/mwa`);
console.log('DB Connected successfully!!!!');

// app config
app.set('x-powered-by', false);

app.use(cors());
app.use(morgan('dev'));
app.use(json());
dotenv.config();

// routes
app.use('/images', imageRouter);
app.use('/users', userRouter);
app.use('/animals', checkToken.validateToken, animalRouter);
// app.use('/animals', animalRouter);

// error handlers 
app.all('*', (req, res, next) => {
    next(new Error('Route not found'));
});

app.use((error, req, res, next) => {
    res.status(500).json({ success: false, data: error.message });
});

app.listen(3000, () => {
    console.log('server is running ...');
});