import { all } from 'redux-saga/effects';
import { newsWatcher } from './news.saga';

export function* rootWatcher() {
    yield all([newsWatcher()]);
}
