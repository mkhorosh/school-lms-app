import { Subject } from './Subject';
import { User } from './User';

export interface Mark {
    id: string;
    subject: Subject;
    mark: [number, number, string][];
    attendance: [number, User, string][];
}
