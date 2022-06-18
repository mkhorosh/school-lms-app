import {
    SET_ASSIGNMENTS,
    SET_CLASSMATES,
    SET_MARKS,
    SET_SCHEDULE,
    UserAction,
    UserState
} from '../actions/user';

const initState: UserState = {
    marks: [],
    classmates: [],
    assignments: [],
    schedule: []
};

export const userReducer = (
    // eslint-disable-next-line @typescript-eslint/default-param-last
    state = initState,
    action: UserAction
): UserState => {
    switch (action.type) {
        case SET_MARKS:
            return { ...state, ...action.payload };
        case SET_CLASSMATES:
            return { ...state, ...action.payload };
        case SET_ASSIGNMENTS:
            return { ...state, ...action.payload };
        case SET_SCHEDULE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
