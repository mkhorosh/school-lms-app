import { Base } from './base';
import { Teacher, Student } from './user';
import { Form } from './form';
import { Assignment } from './assignment';

/* 
title: string - name of subject
teacher: Teacher - object w/ data on user
form: Form[] - classes that study this subject
assignment: [Form, Assignment][] - array of classes and their assignments
room: number - numer of the specified room for subject(teacher's room)
marks: [Form, Student][] - marks for all forms 
*/ 

export class Subject extends Base {
    title: string
    teacher: Teacher
    form: Form[]
    assignment: [Form, Assignment][]
    room: number
    marks: [Form, Student][]
}