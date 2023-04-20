import express, { json } from "express";
import mongoose from "mongoose";
import fs from 'fs';
import morgan from 'morgan';
import path from "path";
import * as url from 'url';
import cors from 'cors';
import dotenv from 'dotenv';
import imageRouter from './routes/imageRouters.js';

// init
const app = express();

// app config
app.set('x-powered-by', false);

app.use(json());
app.use(cors());
dotenv.config();

// routes
app.use('/images', imageRouter);

app.all('*', (req, res, next) => {
    next(new Error('Route not found'));
});

// error handlers 
app.use((error, req, res, next) => {
    res.status(500).json({ success: false, data: error.message });
});

app.listen(3000, () => {
    console.log('server is running ...');
    mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.pws1p.mongodb.net/mwa`, { useNewUrlParser: true });
    // mongoose.connect(`mongodb+srv://mwateam:mw%40Team2023@cluster0.pws1p.mongodb.net/test`, { useNewUrlParser: true });
});