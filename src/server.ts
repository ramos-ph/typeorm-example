import express from 'express';
import {AppDataSource} from './data-source';
import {Router} from './router';

const PORT = process.env.PORT || 8080;
const app = express();

AppDataSource.initialize()
  .then(() => {
    app.use(express.json());

    Router.getRoutePaths().map((route) => {
      app[route.method](route.path, route.action);
    })

    app.listen(PORT, () => console.log(`Server is live at http://localhost:${PORT}`))
  })
  .catch((error) => console.log(error))
