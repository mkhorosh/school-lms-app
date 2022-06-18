import { Form } from './Form';
import { Subject } from './Subject';
import { User } from './User';

export interface Assignment {
    id: string;
    form?: Form;
    subject?: Subject;
    creationDate: string;
    text: string;
    isDone: boolean;
    isMarked: boolean;
    dueDate: string;
    teacher: User;
}
