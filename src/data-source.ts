import 'reflect-metadata';
import {DataSource} from 'typeorm';

import {BookEntity as Book} from './entities/Book';

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'db.sqlite',
  synchronize: true,
  entities: [Book]
});

export {AppDataSource};
