import {
    NotificationsAction,
    NotificationsState,
    SET_NOTIFICATIONS
} from '../actions/notifications';

const initState: NotificationsState = {
    notificationList: []
};

export const notificationsReducer = (
    // eslint-disable-next-line @typescript-eslint/default-param-last
    state = initState,
    action: NotificationsAction
): NotificationsState => {
    switch (action.type) {
        case SET_NOTIFICATIONS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
