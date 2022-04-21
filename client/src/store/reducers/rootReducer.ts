import { combineReducers } from 'redux';
import { newsReducer } from './newsReducer';

export const rootReducer = combineReducers({
    news: newsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
