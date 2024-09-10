import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { Server } from 'socket.io';
import 'dotenv/config';

const PORT = process.env.PORT;

const app : Express = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
	res.send("Bem-vindo ao servidor da sala de bate-papo");
});

const server = app.listen(PORT, () => {
	console.log(`servidor de sala de bate-papo iniciado em ${PORT}`);
});