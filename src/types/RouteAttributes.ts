import {Request, Response} from 'express';

export interface RouteAttributes {
  path: string,
  method: HTTPMethods,
  action(request: Request, response: Response): any,
}

export enum HTTPMethods {
  GET = "get",
  POST = "post",
  PUT = "put",
  PATCH = "patch",
  DELETE = "delete"
}
