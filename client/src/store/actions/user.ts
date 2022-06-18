import { Assignment } from '../../common/Assignment';
import { User } from '../../common/User';

export interface UserState {
    marks: [];
    classmates: User[];
    assignments: Assignment[];
    schedule: {};
}

export const GET_MARKS = 'GET_MARKS';
export const SET_MARKS = 'SET_MARKS';
export const GET_CLASSMATES = 'GET_CLASSMATES';
export const SET_CLASSMATES = 'SET_CLASSMATES';
export const GET_ASSIGNMENTS = 'GET_ASSIGNMENTS';
export const SET_ASSIGNMENTS = 'SET_ASSIGNMENTS';
export const GET_SCHEDULE = 'GET_SCHEDULE';
export const SET_SCHEDULE = 'SET_SCHEDULE';

export interface SetMarksAction {
    type: typeof SET_MARKS;
    payload: {
        marks: [];
    };
}

export interface GetMarksAction {
    type: typeof GET_MARKS;
}

export interface SetClassmatesAction {
    type: typeof SET_CLASSMATES;
    payload: {
        classmates: User[];
    };
}

export interface GetClassmatesAction {
    type: typeof GET_CLASSMATES;
}

export interface SetAssignmentsAction {
    type: typeof SET_ASSIGNMENTS;
    payload: {
        assignments: Assignment[];
    };
}

export interface GetAssignmentsAction {
    type: typeof GET_ASSIGNMENTS;
}
export interface SetScheduleAction {
    type: typeof SET_SCHEDULE;
    payload: {
        schedule: {};
    };
}

export interface GetScheduleAction {
    type: typeof GET_SCHEDULE;
}

export type UserAction =
    | SetMarksAction
    | GetMarksAction
    | SetClassmatesAction
    | GetClassmatesAction
    | SetAssignmentsAction
    | GetAssignmentsAction
    | SetScheduleAction
    | GetScheduleAction;
