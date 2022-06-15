import { Base } from './base';
import { Form } from './form';
import { Subject } from './subject';

/*
Shedule
durance: number - durance for this timetable in WEEKS
startDate: number - start date for this specific schedule (MONDAY)

Student
form: Form - schedule for which grade 
subjects: Subject[] - full list of subjects for this class
timetable: [Subject, [string, number, number], number][] - subject, time (week day, start time, end time), room number

Teacher
forms: Form[] - what grades teach teaches
subjects: Subject[] - subjects teach teaches
timetable: [Subject, Form, [string, number, number], number][] - subject, form, time (week day, start time, end time), room number
*/

export class Schedule extends Base {
    startDate: number
    durance: number
}

export class StudentSchedule extends Schedule {
    form: Form
    subjects: Subject[]
    timetable: [Subject, [string, number, number], number][] 
}

export class TeacherSchedule extends Schedule {
    forms: Form[]
    subjects: Subject[]
    timetable: [Subject, Form, [string, number, number], number][] 
}
