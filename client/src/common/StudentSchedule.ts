import { Form } from './Form';
import { Subject } from './Subject';

export interface StudentSchedule {
    id: string;
    startDate: string;
    durance: string;
    form: Form;
    subjects: Subject[];
    timetable: [Subject, [string, number, number], number][];
}
