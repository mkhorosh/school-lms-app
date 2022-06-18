import { Base } from './base';
import { Subject } from './subject';
import { Student } from './user';

/*
subject: Subject - subject
mark: [number, number, string][] - date of assessment, mark itself, homework / test / class work / exam items for each student
attendance: [number, Student, string][] - attendance date, student, action (present / absent / sick / reasonable absence)
*/

export class Mark extends Base {
    subject: Subject
    mark: [number, number, string][]
    attendance: [number, Student, string][]
}