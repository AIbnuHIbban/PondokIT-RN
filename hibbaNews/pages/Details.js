import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

import bg from "../assets/bg.png"
export default class DetailsScreen extends Component {
    render() {
        const { navigation } = this.props;
        const judul = navigation.getParam('text', 'No Title');
        return (
            <View>
                <Image 
                    style={{width:"100%", height:400, paddingBottom:20}}
                    source={bg}
                />
                <Text style={{textAlign:"center",fontSize:30}}>{judul}</Text>
                 
            </View>
        )
    }
}
