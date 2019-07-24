import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import ImgListItem from './ImgListItem';
import LoadingFooter from './LoadingFooter';
import {styles} from '../styles/styles';
import Separator from './Separator';
import {getGalleryData, refreshGalleryData, loadMoreGallery} from '../actions/gallery';
import {getImgTitle,getUnsplashUrl} from '../utils';


class ImgListView extends Component {
    static navigationOptions = {
        title: 'Gallery',
    };

    componentDidMount() {
        console.log('here');
        this.props.getData();
    }

    renderFooter=()=> {
        return this.props.isLoading ? <LoadingFooter/> : null;
    };

    render() {
        return <View style={styles.maxSizeStyle}>
            <FlatList data={this.props.dataSource}
                      renderItem={({item}) => (<ImgListItem imgUrl={item.urls.small}
                                                            imgTitle={getImgTitle(item)}
                                                            authorName={item.user.name}
                                                            navigate={this.props.navigation.navigate}
                                                            destination={'SelectedImage'}
                                                            destinationProps={{imgUrl: item.urls.regular}}
                      />)}
                      keyExtractor={(item, index) => String(index)}
                      onRefresh={this.props.refresh}
                      refreshing={this.props.isRefreshing}
                      onEndReached={this.props.loadMore}
                      ItemSeparatorComponent={Separator}
                      ListFooterComponent={this.renderFooter}/>
        </View>
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.galleryIsLoading,
        dataSource: state.galleryData,
        page: state.galleryPage,
        isError: state.galleryIsError,
        isRefreshing: state.galleryIsRefreshing
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getData: () => dispatch(getGalleryData(getUnsplashUrl())),
        loadMore: () => dispatch(loadMoreGallery(getUnsplashUrl())),
        refresh: () => dispatch(refreshGalleryData(getUnsplashUrl()))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImgListView);