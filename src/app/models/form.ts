import { Base } from './base';
import { Student, Teacher } from './user';
import { StudentSchedule } from './schedule';

/*
label: string - title (1a)
pupils: Student[] - list of the students
homeTeacher: Teacher - homeroom teacher
schedule: StudentSchedule - timetable for this class
classpresident: StudentSchedule - student in charge
room: number - homeroom
*/

export class Form extends Base {
    label: string
    pupils: Student[]
    homeTeacher: Teacher
    schedule: StudentSchedule
    classPresident: Student
    room: number
}