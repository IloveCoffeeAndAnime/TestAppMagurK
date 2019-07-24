export function isError(state = false, action) {
    if (action.type === 'IS_ERROR')
        return action.isError;
    else
        return state;
}

export function isLoading(state = false, action) {
    if (action.type === 'IS_LOADING')
        return action.isLoading;
    else
        return state;
}

export function isRefreshing(state = false, action) {
    if (action.type === 'IS_REFRESHING')
        return action.isRefreshing;
    else
        return state;
}

export function changePage(state = 1, action) {
    if (action.type === 'CHANGE_PAGE')
        return action.page;
    else
        return state;
}

export function getDataSuccess(state = [], action) {
    if (action.type === 'GET_DATA_SUCCESS')
        return action.dataSource;
    else
        return state;
}