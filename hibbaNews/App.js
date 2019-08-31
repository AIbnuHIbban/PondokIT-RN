import React, { Component } from 'react'
import { Text, View, Image, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import Card from "./components/Card"
import Navbar from "./components/Navbar"

import icon from "./assets/icon.png"
import Home from "./pages/Home"
import gambar1 from "./assets/satu.png"
import gambar2 from "./assets/dua.png"
// Navigation
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from "react-navigation";
import DetailsScreen from "./pages/Details";
import AboutScreen from "./pages/About";

class App extends Component {
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
              <Image source={icon} style={{marginTop:70,width:200,height:200,shadowColor: "#000",shadowOffset: {width: 5,height: 12,},shadowOpacity: 0.58,shadowRadius: 16.00}}/>
              <Text style={{fontSize:30,fontWeight:"bold"}}>LeeNuksID</Text>
              <ActivityIndicator size="large" style={{marginTop:200}} color="blue"/>
              <Text>Tunggu Sebentar</Text>
            </View>
        )
        
    }

      return (
        <View style={{flex:1}}>
            <Navbar text="Hibban News"/>
            <ScrollView style={{paddingBottom:50}}>
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Details', {
                    text:"How To Solve Problem, Using Code",
                    gambar: "satu"
                })}
                >
                <Card 
                    text="How To Solve Problem, Using Code" 
                    gambar={gambar1}  
                    />

                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Details', {
                    text: "How To Create Amazing Design",
                    gambar: "dua"
                    })}
                >
                <Card 
                    text="How To Create Amazing Design" 
                    gambar={gambar2}/>

                </TouchableOpacity>
            </ScrollView>
            </View>
      )
    
  }
}

const TopNav = createMaterialTopTabNavigator({
  Home: {
    screen: App,
  },
  About: AboutScreen,
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: TopNav,
  },
  Details: DetailsScreen,
});

export default createAppContainer(AppNavigator);