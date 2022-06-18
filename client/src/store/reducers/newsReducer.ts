import { NewsAction, NewsState, SET_NEWS } from '../actions/news';

const initState: NewsState = {
    news: []
};

export const newsReducer = (
    // eslint-disable-next-line @typescript-eslint/default-param-last
    state = initState,
    action: NewsAction
): NewsState => {
    switch (action.type) {
        case SET_NEWS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
