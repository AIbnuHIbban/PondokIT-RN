import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

import icon from "../assets/icon.png"
import bg from "../assets/bg.png"

export default class AboutScreen extends Component {
    render() {
        return (
            <View>
                <View style={{flex:1,flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <Image 
                        style={{width:"100%", height:600}}
                        source={bg}
                    />
                    <Image 
                        style={{width:100, height:100}}
                        source={icon}
                    />
                    <Text style={{fontWeight:"bold",fontSize:25,marginTop:10}}>LeeNuksID</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
