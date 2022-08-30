import {BookController} from "./controllers/BookController";
import {RouteAttributes, HTTPMethods} from "./types/RouteAttributes";

export class Router {
  static bookController = new BookController();

  static getRoutePaths(): RouteAttributes[] {
    return [
      {
        path: '/books',
        method: HTTPMethods.GET,
        action: Router.bookController.indexRoute
      },
      {
        path: '/books',
        method: HTTPMethods.POST,
        action: Router.bookController.postRoute
      },
      {
        path: '/books/:id',
        method: HTTPMethods.GET,
        action: Router.bookController.getRoute
      }
    ]
  }
}
