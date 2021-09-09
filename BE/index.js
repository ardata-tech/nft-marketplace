
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import metaRouter from './routes/meta.js';
import userRouter from './routes/user.js';
import signinRouter from  './routes/signin.js';
import signupRouter from './routes/signup.js';
import uploadRouter from './routes/upload.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/meta', metaRouter);
app.use("/user", userRouter);
app.use("/signup", signupRouter);
app.use("/signin", signinRouter);
app.use("/upload", uploadRouter);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);