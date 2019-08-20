import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

export default class ListCard extends Component {
    displaySub(){
        if(this.props.subText){
            return <Text style={{fontSize:17}}>{this.props.subText}</Text>
        }
    }
    displayDesc(){
        if(this.props.deskripsi){
            return <Text>{this.props.deskripsi}</Text>
        }
    }
    render() {
        return (
            <View style={{flexDirection:'row'}}>
                <View style={{padding:10}}>
                    <Icon name={this.props.ikon} size={25} style={{color:'#006051'}}/>
                </View>
                <View style={{flex:1}}>
                    <Text style={{fontSize:15,paddingTop:10}}>{this.props.text}</Text>
                    <View style={{paddingBottom:30}}>
                        {this.displaySub()}
                        {this.displayDesc()}
                    </View>
                    <View style={{borderBottomColor:"grey",borderBottomWidth:0.7,width:'100%'}}>

                    </View>
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({})
