import { User } from './User';

export interface News {
    id: string;
    title: string;
    text: string;
    author: User;
    publicationData: string;
    comments: SistemComment[];
}

export interface SistemComment {
    id: string;
    author: User;
    date: string;
    message: string;
}
