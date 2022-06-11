import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { user, videos } from './fakeData';

dotenv.config();

const app: Express = express();

app.use(cors());

const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Skeleton Loader Demo API!');
});

app.get('/api/users/1', (req: Request, res: Response) => {
  setTimeout(() => {
    res.json(user);
  }, 3000);
});

app.get('/api/videos/1', (req: Request, res: Response) => {
  setTimeout(() => {
    res.json(videos);
  }, 5000);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
