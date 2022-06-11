import { Base } from './base';
import { User } from './user';

/* 
author: User - who commented
date: number - when commented
message: string - comment text
*/

export class Comment extends Base {
    author: User
    date: number
    message: string
}