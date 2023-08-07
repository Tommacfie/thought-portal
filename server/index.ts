import express from 'express';
import router from './router';
import cors from 'cors';

import { PORT } from './config';
import { consoleLog, logWithDate } from './utils/helpers/logging';

export const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

if (process.env.NODE_ENV != 'test') {
  app
    .listen(PORT, () => {
      logWithDate(
        `Backend server started and running at http://localhost:${PORT}`
      );
    })
    .on('error', (error) => {
      consoleLog(error.message);
    })
    .on('close', (message: string) => {
      consoleLog(message);
    });
}
