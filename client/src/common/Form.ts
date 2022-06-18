import { StudentSchedule } from './StudentSchedule';
import { Subject } from './Subject';
import { User } from './User';

export interface Form {
    id: string;
    label: string;
    pupils: User[];
    subjects: Subject[];
    homeTeacher: User;
    schedule: StudentSchedule;
    classPresident: User;
    room: string;
}
