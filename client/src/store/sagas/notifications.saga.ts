import { call, put, SagaReturnType, takeEvery } from 'redux-saga/effects';
import { setNotifications } from '../actions/notification.actions';
import { GET_NOTIFICATIONS } from '../actions/notifications';
import { getNotificationsApi } from './api';

type GetNotificationsResponse = SagaReturnType<typeof getNotificationsApi>;

function* getNotificationsSaga() {
    try {
        const response: GetNotificationsResponse = yield call(
            getNotificationsApi
        );
        // if (response.status === 200) {
        // yield put(setNews(response.data));
        yield put(setNotifications(response));
        // }
    } catch (e) {
        console.log(e);
    }
}

export function* notificationsWatcher() {
    yield takeEvery(GET_NOTIFICATIONS, getNotificationsSaga);
}
