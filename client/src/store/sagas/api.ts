// import axios from 'axios';
import axios from 'axios';
import { News } from '../../common/News';
import { CreateActionPayload, EditActionPayload } from '../actions/news';

export const getNewsApi = async () => {
    // const response = await axios.get<News[]>('/news');
    const response: News[] = [
        {
            id: '1234',
            title: 'Поздравляем с началом летних каникул!',
            text: 'Основная функция каникул или отпуска – это восстановление организма от того напряжения, которое накопилось за целый учебный или рабочий год. Учебный год – это время, когда у ребенка много обязанностей, которые нельзя не выполнить. Каждый день нужно идти в школу, учить уроки и жить по расписанию.',
            author: {
                id: '456',
                login: 'gfb',
                password: 'fgtrhy',
                name: 'Соколов А.А.',
                email: 'svdfj@gmail.com',
                role: 'teacher'
            },
            publicationData: '2022-06-14T08:47:27.446Z',
            comments: [
                {
                    id: '124',
                    author: {
                        id: '443556',
                        login: 'gfb',
                        password: 'fgtrhy',
                        name: 'Хорошилова А.А.',
                        email: 'svdfj@gmail.com',
                        role: 'ыегвуте'
                    },
                    date: '2022-06-15T08:47:27.446Z',
                    message: 'Ура! каникулы'
                }
            ]
        }
    ];
    return response;
};

export const deleteNewsApi = (payload: string) =>
    axios.delete(`news/${payload}`);

export const editNewsApi = (payload: EditActionPayload) => {
    return axios.put<News>(`sessions/${payload.id}`, {
        ...payload
    });
};

export const createNewsApi = (payload: CreateActionPayload) => {
    return axios.post<News>(`news`, {
        ...payload
    });
};

export const getNotificationsApi = async () => {
    // const response = await axios.get<News[]>('/notifications');
    const response = [
        {
            id: '23489',
            updateData: '2022-06-15T08:47:27.446Z',
            text: 'Проверьте вкладку новости',
            title: 'Вам доступна новость'
        }
    ];
    return response;
};

export const getMarksApi = async () => {
    // const response = await axios.get<News[]>('/marks');
    const response = [
        { алгебра: [5, 4, 3, 5, 4] },
        { литература: [4, 4, 3, 5, 4] },
        { химия: [3, 4, 3, 3, 4] }
    ];
    return response;
};
export const getClassmatesApi = async () => {
    // const response = await axios.get<News[]>('/classmates');
    const response = [
        {
            id: '45634',
            login: 'gfb',
            password: 'fgtrhy',
            name: 'Соколов А.А.',
            email: 'oi@gmail.com',
            role: 'student'
        },
        {
            id: '456243',
            login: 'gfb',
            password: 'fgtrhy',
            name: 'Иванов А.А.',
            email: 'we@gmail.com',
            role: 'student'
        },
        {
            id: '45623',
            login: 'gfb',
            password: 'fgtrhy',
            name: 'Бычков А.А.',
            email: 'tye@gmail.com',
            role: 'student'
        },
        {
            id: '45698',
            login: 'gfb',
            password: 'fgtrhy',
            name: 'Петров А.А.',
            email: 'etrbyten@gmail.com',
            role: 'student'
        }
    ];
    return response;
};
export const getAssignmentsApi = async () => {
    // const response = await axios.get<News[]>('/assignments');
    const response = [
        {
            id: '253',
            form: undefined,
            subject: undefined,
            creationDate: '2022-06-15T08:47:27.446Z',
            text: 'прочитать параграф 2',
            isDone: false,
            isMarked: false,
            dueDate: '2022-06-15T08:47:27.446Z',
            teacher: {
                id: '45698',
                login: 'gfb',
                password: 'fgtrhy',
                name: 'Петров А.А.',
                email: 'etrbyten@gmail.com',
                role: 'teacher'
            }
        }
    ];
    return response;
};
export const getScheduleApi = async () => {
    // const response = await axios.get<News[]>('/schedule');
    const response = [
        { no: 1, title: 'Алгебра' },
        { no: 2, title: 'Геометрия' },
        { no: 3, title: 'Химия' },
        { no: 4, title: 'Алгебра' },
        { no: 5, title: 'Физика' },
        { no: 6, title: 'Литература' },
        { no: 7, title: 'Обществознание' }
    ];
    return response;
};
