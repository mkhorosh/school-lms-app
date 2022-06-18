import { Base } from './base';
import { User } from './user';

/*
updateData: number - when changes were made
isNewMark: boolean - new mark or new assignment
text: string - message
title: string - new mark or new assignment (for pupils)
watchers: User[] - who gets the notification
*/
export class Notification extends Base {
    updateData: number 
    isNewMark: boolean
    text: string
    title: string 
    watchers: User[]
}