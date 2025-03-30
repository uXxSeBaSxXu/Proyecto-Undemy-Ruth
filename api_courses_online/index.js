import express from "express";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import router from './router';
import * as dotenv from 'dotenv';

dotenv.config();

// CONEXION A LA BASE DE DATOS
mongoose.Promise = global.Promise;
const dbUrl = "mongodb://localhost:27017/courses_udemy";

mongoose.connect(dbUrl)


    .then(() => console.log("CONECTADO A LA BD DE MONGODB PUERTO 27017"))
    .catch(err => console.log(err));

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/', router);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log("EL SERVIDOR SE ESTA EJECUTANDO EN EL PUERTO 3000");
});