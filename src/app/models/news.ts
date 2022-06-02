import { Base } from './base';
import { Form } from './form';
import { User } from './user';
import { Comment } from './comment';

/* 
title: string - title
text: string -text
// pic: string 
watchers: Form[] - who can see
author: User - who posted
publicationData: number - date 
comments: Comment[] - who commented
*/

export class News extends Base {
    title: string 
    text: string
    // pic: string 
    watchers: Form[] 
    author: User
    publicationData: number
    comments: Comment[]
}