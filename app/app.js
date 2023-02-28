import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import enviroments from "./config/enviroments";
import allRoutes from "./routes/users.routes";
const app = express();

//settings
app.set("PORT", process.env.PORT || 1000);


//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//router
app.get('/', (req, res) => {
    res.send({ menssage: 'welcome to my application' })
})
app.use('/api', allRoutes);

export default app;