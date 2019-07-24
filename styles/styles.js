import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    itemStyle:{
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        height: 100,
        overflow:'hidden'
    },
    smallChildItemStyle:{
        flex:1,
        height: '100%'
    },
    bigChildItemStyle:{
        flex:2,
        height: '100%'
    },
    textStyle:{
        paddingLeft:5,
        paddingTop:5
    },
    maxSizeStyle:{
        width:'100%',
        height:'100%'
    },
    separatorStyle:{
        height: 1,
        width: "100%",
        backgroundColor: "#CED0CE",
    },
    footerStyle:{
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: "#CED0CE"
    }
});
export {styles}