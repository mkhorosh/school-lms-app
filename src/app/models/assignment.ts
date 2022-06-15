import { Base } from './base';
import { Form } from './form';
import { Subject } from './subject';
import { Teacher, Student } from './user';

/*
form: Form - which grade assignment for
subject: Subject - name of the subject
creationDate: number - date when task is given
text: string - text of the assignment
isDone: boolean - yes or no
isMarked: boolean - was mark announced
dueDate: number - date to be done
teacher: Teacher - teacher to assess
mark: [Form, Student, number][] - final mark for pupils of given grade
*/

export class Assignment extends Base {
    form: Form
    subject: Subject
    creationDate: number
    text: string
    isDone: boolean
    isMarked: boolean
    dueDate: number
    teacher: Teacher
    marks: [Form, Student, number][]
}