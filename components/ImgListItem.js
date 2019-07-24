import React, {Component} from 'react';
import {Image, TouchableWithoutFeedback, View, Text} from 'react-native'
import {styles} from '../styles/styles';

export default class ImgListItem extends Component {
    constructor(props) {
        super(props);
        this.onPressItem = this.onPressItem.bind(this);
    }

    onPressItem() {
        this.props.navigate(this.props.destination, this.props.destinationProps);
    }

    render() {
        return <TouchableWithoutFeedback onPress={this.onPressItem}><View style={styles.itemStyle}><Image
            source={{
                uri: this.props.imgUrl,
                cache: 'only-if-cached',
            }}
            style={styles.smallChildItemStyle}/>
            <View style={styles.bigChildItemStyle}>
                <Text style={styles.textStyle}>{this.props.authorName}</Text>
                <Text style={styles.textStyle}>{this.props.imgTitle}</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
    }
}