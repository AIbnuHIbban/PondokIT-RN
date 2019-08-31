import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Navbar extends Component {

  render() {
    return (
      <View style={{backgroundColor:"#F73B52", height:60}}>
        <Text style={{fontSize:35, textAlign:"center",lineHeight:60,color:"white"}}> {this.props.text} </Text>
      </View>
    );
  }
}
