import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connect from './assets/mongo/db.js';
import PurchaseRouter from './routes/purchaseRoute.js';
import SalesRouter from './routes/salesRoute.js';
import UserRouter from './routes/userRoute.js';
import SignupRouter from './routes/signupRoute.js';
import LoginRouter from './routes/loginRoute.js';
import LogoutRouter from './routes/logoutRoute.js';
import VerifyEmailRouter from './routes/verifyEmail.js'
import OrderRouter from './routes/orderRoute.js';
import ForgotPasswordRouter from './routes/forgotPassword.js'

const corsOptions = {
    origin: process.env.FRONTEND_URL || 'https://hmms-client.vercel.app',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE'
};


const app = express()
dotenv.config();
app.use(cors(corsOptions));
app.use(express.json())

app.get('/', (_, res) => {
    res.status(200).json({message: 'Docker is working fine!'});
});

app.use('/purchases', PurchaseRouter);
app.use('/sales', SalesRouter);
app.use('/user', UserRouter);
app.use('/signup', SignupRouter);
app.use('/login', LoginRouter);
app.use('/logout', LogoutRouter);
app.use('/verifyemail', VerifyEmailRouter);
app.use('/order', OrderRouter);
app.use('/forgotpassword', ForgotPasswordRouter);

// This condition redering is because of the deployment of the server directory in vercel. Vercel is having a builtIn server to deploy the projects. 
const PORT = process.env.PORT || 5000;         
app.listen(PORT, async () => {
    console.log(`Server started on port ${PORT} in ${process.env.NODE_ENV} mode.`);
    await connect();
});

export default app;