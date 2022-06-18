import { Assignment } from '../../common/Assignment';
import { User } from '../../common/User';
import {
    GetAssignmentsAction,
    GetClassmatesAction,
    GetMarksAction,
    GetScheduleAction,
    GET_ASSIGNMENTS,
    GET_CLASSMATES,
    GET_MARKS,
    GET_SCHEDULE,
    SetAssignmentsAction,
    SetClassmatesAction,
    SetMarksAction,
    SetScheduleAction,
    SET_ASSIGNMENTS,
    SET_CLASSMATES,
    SET_MARKS,
    SET_SCHEDULE
} from './user';

export const getMarks = (): GetMarksAction => ({
    type: GET_MARKS
});

export const setMarks = (marks: any): SetMarksAction => ({
    type: SET_MARKS,
    payload: { marks }
});
export const getClassmates = (): GetClassmatesAction => ({
    type: GET_CLASSMATES
});

export const setClassmates = (classmates: User[]): SetClassmatesAction => ({
    type: SET_CLASSMATES,
    payload: { classmates }
});
export const getAssignments = (): GetAssignmentsAction => ({
    type: GET_ASSIGNMENTS
});

export const setAssignments = (
    assignments: Assignment[]
): SetAssignmentsAction => ({
    type: SET_ASSIGNMENTS,
    payload: { assignments }
});
export const getSchedule = (): GetScheduleAction => ({
    type: GET_SCHEDULE
});

export const setSchedule = (schedule: {}): SetScheduleAction => ({
    type: SET_SCHEDULE,
    payload: { schedule }
});
