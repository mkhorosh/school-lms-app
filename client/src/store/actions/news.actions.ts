import { News } from '../../common/News';
import { GetNewsAction, GET_NEWS, SetNewsAction, SET_NEWS } from './news';

export const getNews = (): GetNewsAction => ({
    type: GET_NEWS
});

export const setNews = (news: News[]): SetNewsAction => ({
    type: SET_NEWS,
    payload: { news }
});
