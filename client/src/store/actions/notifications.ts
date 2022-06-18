import { SistemNotification } from '../../common/SistemNotification';

export interface NotificationsState {
    notificationList: SistemNotification[];
}

export const GET_NOTIFICATIONS = 'GET_NOTIFICATIONS';
export const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS';

export interface SetNotificationsAction {
    type: typeof SET_NOTIFICATIONS;
    payload: {
        notificationList: SistemNotification[];
    };
}

export interface GetNotificationsAction {
    type: typeof GET_NOTIFICATIONS;
}

export type NotificationsAction =
    | SetNotificationsAction
    | GetNotificationsAction;
