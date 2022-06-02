import { Base } from './base';
import { User } from './user';
import { Schedule } from './schedule';

/*
label: string - title (1a)
pupils: User[] - list of the students
homeTeacher: User - homeroom teacher
schedule: Schedule - timetable for this class
classpresident: User - student in charge
room: number - homeroom
*/

export class Form extends Base {
    label: string
    pupils: User[]
    homeTeacher: User
    schedule: Schedule
    classpresident: User
    room: number
}