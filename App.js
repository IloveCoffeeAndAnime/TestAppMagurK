import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Provider} from 'react-redux';
import ImgListView from './components/ImgListView';
import BigImgView from './components/BigImgView'
import configStore from './store';

const store = configStore();

const MainNavigator = createStackNavigator({
    ImageList: {screen: ImgListView},
    SelectedImage: {screen: BigImgView},
});

const NavigatorContainer = createAppContainer(MainNavigator);

export default class App extends Component {
    render() {
        return <Provider store={store}>
            <NavigatorContainer/>
        </Provider>;
    }
};