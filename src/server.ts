import path from 'path';

import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';

import AppRouter from './app-router';
import './controllers/vehicle.controller';
import './controllers/image.controller';

const app = express();

app.use(helmet());

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000'
  })
);

app.use(compression());

app.use(AppRouter.getInstance);

const port = 1234;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
