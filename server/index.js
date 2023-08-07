import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json({ limig: "50mb" }))



app.use("/api/v1/dalle", dalleRoutes);
app.get('/', (request, response) => {
    response.status(200).json({ message: "Hello welcome to Make 3D color" });
})

app.listen(8080, () => console.log('Server has started on port 8080'));
