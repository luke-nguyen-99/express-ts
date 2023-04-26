import express, { Request, Response } from 'express';
import helmet from 'helmet';
import * as cors from 'cors';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world! ???');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});