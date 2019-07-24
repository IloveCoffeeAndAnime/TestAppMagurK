export function isError(isError) {
    return {
        type: 'IS_ERROR',
        isError: isError
    }
}

export function isLoading(isLoading) {
    return {
        type: 'IS_LOADING',
        isLoading: isLoading
    }
}

export function isRefreshing(isRefreshing) {
    return {
        type: 'IS_REFRESHING',
        isRefreshing: isRefreshing
    }
}

export function changePage(page) {
    return {
        type: 'CHANGE_PAGE',
        page: page
    }
}

export function getDataSuccess(data) {
    return {
        type: 'GET_DATA_SUCCESS',
        dataSource: data
    }
}

function getDataFromServer(url,dispatch, getState){
        dispatch(isLoading(true));
        const {galleryPage,galleryData} = getState();
        return fetch(url + '&page=' + galleryPage).then((res) => {
            if (!res.ok) {
                throw Error(res.statusText);
            }
            dispatch(isError(false));
            return res;
        }).then((res) => res.json()).then((dataJson) => {
            dispatch(isLoading(false));
            dispatch(isRefreshing(false));
            dispatch(getDataSuccess(galleryPage === 1 ? dataJson : [...galleryData, ...dataJson]))
        })
            .catch(() => dispatch(isError(true)))
}

export function getGalleryData(url) {
    return function (dispatch, getState) {
         return getDataFromServer(url,dispatch,getState);
    }
}

export function refreshGalleryData(url){
    return function (dispatch,getState){
        dispatch(isRefreshing(true));
        dispatch(changePage(1));
        return getDataFromServer(url,dispatch,getState);
    }
}

export function loadMoreGallery(url){
    return function (dispatch, getState){
        const {galleryPage} = getState();
        dispatch(changePage(galleryPage+1));
        return getDataFromServer(url,dispatch,getState);
    }
}