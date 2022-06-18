import { Assignment } from './Assignment';
import { Form } from './Form';
import { User } from './User';

export interface Subject {
    id: string;
    title: string;
    teacher: User;
    form: Form[];
    assignment: [Form, Assignment][];
    room: number;
    marks: [Form, User][];
}
