import { News, SistemComment } from '../../common/News';
import { User } from '../../common/User';

export interface NewsState {
    news: News[];
}

export const GET_NEWS = 'GET_NEWS';
export const SET_NEWS = 'SET_NEWS';
export const DELETE_NEWS = 'DELETE_NEWS';
export const EDIT_NEWS = 'EDIT_NEWS';
export const CREATE_NEWS = 'CREATE_NEWS';

export interface SetNewsAction {
    type: typeof SET_NEWS;
    payload: {
        news: News[];
    };
}

export interface GetNewsAction {
    type: typeof GET_NEWS;
}

export interface DeleteNewsAction {
    type: typeof DELETE_NEWS;
    payload: string;
}

export interface EditActionPayload {
    id: string;
    title: string;
    text: string;
    author: User;
    publicationData: string;
    comments: SistemComment[];
}
export interface EditNewsAction {
    type: typeof EDIT_NEWS;
    payload: EditActionPayload;
}

export interface CreateActionPayload {
    title: string;
    text: string;
    author: User;
    publicationData: string;
    comments: SistemComment[];
}
export interface CreateNewsAction {
    type: typeof CREATE_NEWS;
    payload: CreateActionPayload;
}

export type NewsAction =
    | SetNewsAction
    | GetNewsAction
    | CreateNewsAction
    | EditNewsAction
    | DeleteNewsAction;
