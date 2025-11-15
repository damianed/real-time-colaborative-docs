import express from 'express';
import cors from 'cors';
import {setupRoutes} from './routes/index.ts';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

setupRoutes(app);

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}!`);
});
