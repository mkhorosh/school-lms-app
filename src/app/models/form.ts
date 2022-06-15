import { Base } from './base';
import { Student, Teacher } from './user';
import { StudentSchedule } from './schedule';
import { Subject } from './subject';

/*
label: string - title (1a)
pupils: Student[] - list of the students
subjects: Subject[] - subjects for one form
homeTeacher: Teacher - homeroom teacher
schedule: StudentSchedule - timetable for this class
classpresident: StudentSchedule - student in charge
room: number - homeroom
*/

export class Form extends Base {
    label: string
    pupils: Student[]
    subjects: Subject[]
    homeTeacher: Teacher
    schedule: StudentSchedule
    classPresident: Student
    room: number
}