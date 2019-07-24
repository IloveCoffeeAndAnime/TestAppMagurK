import {combineReducers} from 'redux';
import {isError, isLoading, isRefreshing, changePage, getDataSuccess} from './gallery';

export default combineReducers({
    galleryIsError: isError,
    galleryIsLoading: isLoading,
    galleryIsRefreshing: isRefreshing,
    galleryPage: changePage,
    galleryData: getDataSuccess,
});

