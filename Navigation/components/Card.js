import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import icon from "../assets/icon.png";

export default class Card extends Component {
    render() {
        return (
            <View style={{borderBottomWidth:2,borderBottomColor:"grey",marginVertical:10,paddingBottom:10,paddingHorizontal:10,shadowColor: "#000",shadowOffset: {width: 5,height: 12,},shadowOpacity: 0.58,shadowRadius: 16.00,elevation: 24}}>
                <View style={{flex:1, flexDirection:"row"}}>
                <View >
                    <Image source={icon} style={{width:50,height:50,borderRadius:50}}/>  
                </View>
                <View style={{paddingLeft:15}}>
                    <Text style={{fontSize:25}}>{this.props.text}</Text>
                    <Text>Prabumulih, Indonesia</Text>
                </View>

                </View>
                <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                    <Image source={this.props.gambar} style={{width:'100%',height:200,marginBottom:20,marginTop:10,borderRadius:10}} />
                    <Text style={{textAlign:"center"}}>Developer React Native</Text>
                </View>
            </View>
        )
    }
}
