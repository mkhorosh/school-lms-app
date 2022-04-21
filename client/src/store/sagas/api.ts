// import axios from 'axios';
import { News } from '../../common/News';

export const getNewsApi = async () => {
    // const response = await axios.get<News[]>('http://localhost:3003/');
    const response: News[] = [
        {
            id: '1234',
            title: 'Новость 1',
            description: '',
            author: 'Marina'
        },
        {
            id: '129634',
            title: 'Новость 2',
            description: '',
            author: 'Rina'
        }
    ];
    return response;
};
