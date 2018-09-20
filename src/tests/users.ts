// TODO: figure out how to not import reflect here.
import 'reflect-metadata';
import { Key } from '../decorators';

export class User {
  @Key id: number;
  @Key firstName: string;
  @Key lastName: string;
  @Key roles: { foo: string };
}
