import { createNewsApi, deleteNewsApi, editNewsApi, getNewsApi } from './api';
import { call, put, SagaReturnType, takeEvery } from 'redux-saga/effects';
import {
    CreateNewsAction,
    DeleteNewsAction,
    EditNewsAction,
    GET_NEWS
} from '../actions/news';
import { getNews, setNews } from '../actions/news.actions';
import { message } from 'antd';

type GetNewsResponse = SagaReturnType<typeof getNewsApi>;
type DeleteNewsResponse = SagaReturnType<typeof deleteNewsApi>;
type EditNewsResponse = SagaReturnType<typeof editNewsApi>;
type CreateNewsResponse = SagaReturnType<typeof createNewsApi>;

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

function* deleteNewsSaga({ payload }: DeleteNewsAction) {
    try {
        const response: DeleteNewsResponse = yield call(deleteNewsApi, payload);
        if (response.status === 200) {
            message.success('запись удалена');
            yield put(getNews());
        }
    } catch (e) {
        console.log(e);
    }
}

function* editNewsSaga({ payload }: EditNewsAction) {
    try {
        const response: EditNewsResponse = yield call(editNewsApi, payload);
        if (response.status === 200) {
            message.success('запись отредактирована');
            yield put(getNews());
        }
    } catch (e) {
        console.log(e);
    }
}

function* createNewsSaga({ payload }: CreateNewsAction) {
    try {
        const response: CreateNewsResponse = yield call(createNewsApi, payload);
        if (response.status === 200) {
            message.success('запись создана');
            yield put(getNews());
        }
    } catch (e) {
        console.log(e);
    }
}

export function* newsWatcher() {
    yield takeEvery(GET_NEWS, getNewsSaga);
    yield takeEvery(GET_NEWS, deleteNewsSaga);
    yield takeEvery(GET_NEWS, editNewsSaga);
    yield takeEvery(GET_NEWS, createNewsSaga);
}
