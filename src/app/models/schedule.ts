import { Base } from './base';
import { Form } from './form';
import { Subject } from './subject';

/*
form: Form - schedule for which grade 
subjects: Subject[] - full list of subjects for this class
lessonsNet: [Subject, [string, number, number], number][]  - subject, time (week day, start time, end time), room number
durance: number - durance for this timetable in WEEKS
startDate: number - start date for this specific schedule (MONDAY)
*/

export class Schedule extends Base {
    form: Form
    subjects: Subject[]
    lessonsNet: [Subject, [string, number, number], number][] 
    durance: number
    startDate: number
}