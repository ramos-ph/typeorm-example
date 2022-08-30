import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {AppDataSource} from "../data-source";
import {Book} from "../types/Book";

@Entity()
export class BookEntity implements Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  genre: string;

  @Column()
  author: string;
}

export function getBookRepository() {
  const repository = AppDataSource.manager.getRepository(BookEntity);
  return repository;
}
