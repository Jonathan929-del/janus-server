// Imports
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import buildingsRouter from './routes/buildings.js';
import componentsRouter from './routes/components.js';
import propertiesRouter from './routes/properties.js';
import activitiesRouter from './routes/activities.js';


// Middleware
dotenv.config();
const app = express();
app.use(cors({origin:'*'}));
app.use(express.json());
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


// Routes
app.use('/buildings', buildingsRouter);
app.use('/properties', propertiesRouter);
app.use('/components', componentsRouter);
app.use('/activities', activitiesRouter);
app.get('/', (req, res) => {
    res.status(200).json('Connected to the sever.');
});


// Database Connect
mongoose.connect(process.env.MONGO_DB).then(() => console.log('Connected to the database')).catch(err => console.log(err));


// Server Port
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT}`);
});