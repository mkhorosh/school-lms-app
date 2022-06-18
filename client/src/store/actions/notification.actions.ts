import { SistemNotification } from '../../common/SistemNotification';
import {
    GetNotificationsAction,
    GET_NOTIFICATIONS,
    SetNotificationsAction,
    SET_NOTIFICATIONS
} from './notifications';

export const getNotifications = (): GetNotificationsAction => ({
    type: GET_NOTIFICATIONS
});

export const setNotifications = (
    notificationList: SistemNotification[]
): SetNotificationsAction => ({
    type: SET_NOTIFICATIONS,
    payload: { notificationList }
});
