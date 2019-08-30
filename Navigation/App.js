import React, { Component } from 'react'
import { Text, View, ActivityIndicator, ScrollView, Image, Button } from 'react-native'
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import gambar from "./assets/icon.png";
import gambar1 from "./assets/satu.png";
import gambar2 from "./assets/dua.png";
import About from "./pages/About";

import { createStackNavigator, createAppContainer } from "react-navigation";

export default class App extends Component {
  state={
    role:true
  }

  render() {
    setTimeout(() => {
      this.setState({ 
        role:false
      });  
    }, 3000);

    if(this.state.role){
        return (
            <View style={{flex:1,alignItems:"center"}}>
              <Image source={gambar} style={{marginTop:70,width:200,height:200,shadowColor: "#000",shadowOffset: {width: 5,height: 12,},shadowOpacity: 0.58,shadowRadius: 16.00}}/>
              <Text style={{fontSize:30,fontWeight:"bold"}}>LeeNuksID</Text>
              <ActivityIndicator size="large" style={{marginTop:200}} color="blue"/>
              <Text>Tunggu Sebentar</Text>
            </View>
        )
        
    }

      return (
        <View style={{flex:1}}>
          <Navbar text="Pondok News"/>
          <ScrollView style={{paddingBottom:50}}>
            <Card text="Al Quran dan As-Sunnah" gambar={gambar1}/>
            <Card text="Harta Riba" gambar={gambar2}/>
          </ScrollView>
          <Button onPress={() => this.props.navigation.navigate('About')} title="Ke About"/>
        </View>
        
      )
    
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: App,
    About: About
  },
  {
    initialRouteName: "Home"
  }
);


export default createAppContainer(AppNavigator);