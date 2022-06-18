import { combineReducers } from 'redux';
import { newsReducer } from './newsReducer';
import { notificationsReducer } from './notificationsReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
    news: newsReducer,
    notifications: notificationsReducer,
    user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;
