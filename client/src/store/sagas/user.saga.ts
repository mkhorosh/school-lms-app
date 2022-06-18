import { SagaReturnType, put, takeEvery, call } from 'redux-saga/effects';
import {
    GET_MARKS,
    GET_CLASSMATES,
    GET_ASSIGNMENTS,
    GET_SCHEDULE
} from '../actions/user';
import {
    setMarks,
    setClassmates,
    setAssignments,
    setSchedule
} from '../actions/user.actions';
import {
    getMarksApi,
    getClassmatesApi,
    getAssignmentsApi,
    getScheduleApi
} from './api';

type GetMarksResponse = SagaReturnType<typeof getMarksApi>;
type GetClassmatesResponse = SagaReturnType<typeof getClassmatesApi>;
type GetAssignmentsResponse = SagaReturnType<typeof getAssignmentsApi>;
type GetScheduleResponse = SagaReturnType<typeof getScheduleApi>;

function* getMarksSaga() {
    try {
        const response: GetMarksResponse = yield call(getMarksApi);
        // if (response.status === 200) {
        // yield put(setNews(response.data));
        yield put(setMarks(response));
        // }
    } catch (e) {
        console.log(e);
    }
}
function* getClassmatesSaga() {
    try {
        const response: GetClassmatesResponse = yield call(getClassmatesApi);
        // if (response.status === 200) {
        // yield put(setNews(response.data));
        yield put(setClassmates(response));
        // }
    } catch (e) {
        console.log(e);
    }
}

function* getAssignmentsSaga() {
    try {
        const response: GetAssignmentsResponse = yield call(getAssignmentsApi);
        // if (response.status === 200) {
        // yield put(setNews(response.data));
        yield put(setAssignments(response));
        // }
    } catch (e) {
        console.log(e);
    }
}

function* getScheduleSaga() {
    try {
        const response: GetScheduleResponse = yield call(getScheduleApi);
        // if (response.status === 200) {
        // yield put(setNews(response.data));
        yield put(setSchedule(response));
        // }
    } catch (e) {
        console.log(e);
    }
}

export function* userWatcher() {
    yield takeEvery(GET_MARKS, getMarksSaga);
    yield takeEvery(GET_CLASSMATES, getClassmatesSaga);
    yield takeEvery(GET_ASSIGNMENTS, getAssignmentsSaga);
    yield takeEvery(GET_SCHEDULE, getScheduleSaga);
}
