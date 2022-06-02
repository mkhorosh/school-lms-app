import { Base } from './base';
import { User } from './user';
import { Form } from './form';
import { Assignment } from './assignment';

/* 
title: string - name of subject
teacher: User - object w/ data on user
form: Form[] - classes that study this subject
assignment: [Form, Assignment][] - array of classes and their assignments
room: number - numer of the specified room for subject(teacher's room)
marks: [Form, User][] - marks for all forms 
attendance: [Form, User, string][] - attendance (present / absent / sick / reasonable absence)
*/ 

export class Subject extends Base {
    title: string
    teacher: User
    form: Form[]
    assignment: [Form, Assignment][]
    room: number
    marks: [Form, User][]
    attendance: [Form, User, string][]
}