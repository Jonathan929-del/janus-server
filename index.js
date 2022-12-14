// Imports
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import usersRouter from './routes/users.js';
import imagesRouter from './routes/images.js';
import buildingsRouter from './routes/buildings.js';
import componentsRouter from './routes/components.js';
import propertiesRouter from './routes/properties.js';
import activitiesRouter from './routes/activities.js';
import notificationsRouter from './routes/notifications.js';


// Middleware
dotenv.config();
const app = express();
app.use(cors({origin:'*'}));
app.use(express.json());
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


// Routes
app.use('/users', usersRouter);
app.use('/images', imagesRouter)
app.use('/buildings', buildingsRouter);
app.use('/properties', propertiesRouter);
app.use('/components', componentsRouter);
app.use('/activities', activitiesRouter);
app.use('/notifications', notificationsRouter);


// Database Connect
mongoose.connect(process.env.MONGO_DB).then(() => console.log('Connected to the database')).catch(err => console.log(err));


// Server Port
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT}`);
});