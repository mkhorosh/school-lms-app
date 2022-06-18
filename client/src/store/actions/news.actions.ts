import { News } from '../../common/News';
import {
    CreateActionPayload,
    CreateNewsAction,
    CREATE_NEWS,
    DeleteNewsAction,
    DELETE_NEWS,
    EditActionPayload,
    EditNewsAction,
    EDIT_NEWS,
    GetNewsAction,
    GET_NEWS,
    SetNewsAction,
    SET_NEWS
} from './news';

export const getNews = (): GetNewsAction => ({
    type: GET_NEWS
});

export const setNews = (news: News[]): SetNewsAction => ({
    type: SET_NEWS,
    payload: { news }
});

export const deleteNews = (key: string): DeleteNewsAction => ({
    type: DELETE_NEWS,
    payload: key
});

export const editNews = ({
    id,
    title,
    text,
    author,
    publicationData,
    comments
}: EditActionPayload): EditNewsAction => ({
    type: EDIT_NEWS,
    payload: {
        id,
        title,
        text,
        author,
        publicationData,
        comments
    }
});

export const createNews = ({
    title,
    text,
    author,
    publicationData,
    comments
}: CreateActionPayload): CreateNewsAction => ({
    type: CREATE_NEWS,
    payload: {
        title,
        text,
        author,
        publicationData,
        comments
    }
});
