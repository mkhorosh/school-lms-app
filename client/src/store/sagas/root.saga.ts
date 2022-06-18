import { all } from 'redux-saga/effects';
import { newsWatcher } from './news.saga';
import { notificationsWatcher } from './notifications.saga';
import { userWatcher } from './user.saga';

export function* rootWatcher() {
    yield all([newsWatcher(), notificationsWatcher(), userWatcher()]);
}
