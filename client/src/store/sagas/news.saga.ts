import { getNewsApi } from './api';
import { call, put, SagaReturnType, takeEvery } from 'redux-saga/effects';
import { GET_NEWS } from '../actions/news';
import { setNews } from '../actions/news.actions';

type GetNewsResponse = SagaReturnType<typeof getNewsApi>;

function* getNewsSaga() {
    try {
        const response: GetNewsResponse = yield call(getNewsApi);
        // if (response.status === 200) {
        // yield put(setNews(response.data));
        yield put(setNews(response));
        // }
    } catch (e) {
        console.log(e);
    }
}

export function* newsWatcher() {
    yield takeEvery(GET_NEWS, getNewsSaga);
}
