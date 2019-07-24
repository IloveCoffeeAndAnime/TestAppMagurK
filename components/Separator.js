import React, {Component} from 'react';
import {View} from 'react-native';
import {styles} from '../styles/styles';

export default class Separator extends Component {
    render() {
        return (
            <View
                style={styles.separatorStyle}
            />
        );
    }
}