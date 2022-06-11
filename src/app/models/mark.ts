import { Base } from './base';
import { Subject } from './subject';

/*
subject: Subject - subject
mark: number[] - date of assessment, mark itself, homework / test / class work items for each student
*/

export class Mark extends Base {
    subject: Subject
    mark: [number, number, string][]
}