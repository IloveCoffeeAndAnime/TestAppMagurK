import React, {Component} from 'react';
import {ActivityIndicator, View} from "react-native";
import {styles} from '../styles/styles';

export default class LoadingFooter extends Component{
    render(){
        return (
            <View style={styles.footerStyle}>
                <ActivityIndicator animating size="large" />
            </View>
        );
    }
}