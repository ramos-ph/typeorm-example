import {Request, Response} from 'express';

import {getBookRepository} from '../entities/Book';
import {Book} from '../types/Book';

export class BookController {

  async indexRoute(request: Request, response: Response) {
    const bookRepository = getBookRepository();
    const books = await bookRepository.find();
    response.status(200).send(books)
  }

  async postRoute(request: Request, response: Response) {
    const bookRepository = getBookRepository();
    const book = request.body as Book;
    const createdBook = bookRepository.create(book);
    await bookRepository.save(createdBook);
    response.status(201).send(createdBook);
  }

  async getRoute(request: Request, response: Response) {
    const bookRepository = getBookRepository();
    const {id: bookId} = request.params;
    const book = await bookRepository.findOneBy({ id: Number(bookId) });

    if (!book) {
      response.status(404).send({message: 'Book not found'});
    } else {
      response.status(200).send(book);
    }
  }
}
