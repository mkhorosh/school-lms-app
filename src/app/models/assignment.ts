import { Base } from './base';
import { Form } from './form';
import { Subject } from './subject';
import { Teacher, Student } from './user';

/*
text: string - text of the assignment
creationDate: number - date when task is given
isDone: boolean - yes or no
isSeen: boolean - did teacher see finished task
isMarked: boolean - was mark announced
dueDate: number - date to be done
subject: Subject - name of the subject
teacher: Teacher - teacher to assess
mark: [Form, Student, number][] - final mark for pupils of given grade
*/

export class Assignment extends Base {
    form: Form
    text: string
    creationDate: number
    isDone: boolean
    isSeen: boolean
    isMarked: boolean
    dueDate: number
    subject: Subject
    teacher: Teacher
    marks: [Form, Student, number][]
}