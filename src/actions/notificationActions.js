export const Types = {
    REMOVE_LAST_NOTIFICATION: "REMOVE_LAST_NOTIFICATION",
};

export const removeNotification = () => ({
    type: Types.REMOVE_LAST_NOTIFICATION,
});