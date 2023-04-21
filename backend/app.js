import express, { json } from "express";
import mongoose from "mongoose";
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import imageRouter from './routes/imageRouters.js';
import userRouter from './routes/userRouter.js';
<<<<<<< HEAD
import animalRouter from './routes/animalRouter.js';
import checkToken from './middlewares/checkToken.js';
=======
import animalRouter from './routes/animalReportRouter.js';
>>>>>>> master

// init
const app = express();

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.pws1p.mongodb.net/mwa`);
console.log('DB Connected successfully!!!!');

// app config
app.set('x-powered-by', false);

app.use(morgan('dev'));
app.use(json());
app.use(cors());
dotenv.config();

// routes
app.use('/images', imageRouter);
<<<<<<< HEAD
app.use('/users', userRouter);
app.use('/animals', checkToken.validateToken, animalRouter);
=======
app.use('/animalReports', animalRouter);
>>>>>>> master

// error handlers 
app.all('*', (req, res, next) => {
    next(new Error('Route not found 1'));
});

app.use((error, req, res, next) => {
    res.status(500).json({ success: false, data: error.message });
});

app.listen(3000, () => {
<<<<<<< HEAD
    console.log('server is running ...');
=======
    console.log('server is running ... port 3000');
    // mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.pws1p.mongodb.net/mwa`, { useNewUrlParser: true });
>>>>>>> master
});