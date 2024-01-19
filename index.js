import http from 'node:http'
import express from 'express'
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.use(express.json());

app.get('/', (req, res) => {
    return res.sendFile(__dirname+'/pages/home.html');
})

http.createServer(app).listen(3001).on("listening", () => console.log("rodando na 3000"))