import express from 'express';
import router from './router';
import cors from 'cors';

import { PORT } from './config';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app
  .listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(
      `\n${new Date().toLocaleString()}:\n=> Backend server started and running at http://localhost:${PORT}`
    );
  })
  .on('error', (error) => {
    // eslint-disable-next-line no-console
    console.log(error.message);
  });
