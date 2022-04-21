import { News } from '../../common/News';

export interface NewsState {
    news: News[];
}

export const GET_NEWS = 'GET_NEWS';
export const SET_NEWS = 'SET_NEWS';

export interface SetNewsAction {
    type: typeof SET_NEWS;
    payload: {
        news: News[];
    };
}

export interface GetNewsAction {
    type: typeof GET_NEWS;
}

export type NewsAction = SetNewsAction | GetNewsAction;
