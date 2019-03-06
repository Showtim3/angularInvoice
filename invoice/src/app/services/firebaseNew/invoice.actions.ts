
import {Action} from '@ngrx/store';
import {login} from "./invoice.model";


export const READ = '[Invoice] Read';
export const LOGIN = '[Invoice] Login';


export class Login implements Action{
  readonly type = LOGIN;
   constructor(public payload: login) {};
}

export class Read implements Action{
  readonly type = READ;
  constructor() {};
}

export type Actions = Read | Login;
