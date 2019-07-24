import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {styles} from '../styles/styles';

export default class BigImgView extends Component {
    render() {
        const {navigation} = this.props;
        const imgUrl = navigation.getParam('imgUrl', '');
        return <View><Image style={styles.maxSizeStyle} source={{
            uri: imgUrl,
            cache: 'only-if-cached',
        }}/></View>
    }
}