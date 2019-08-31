import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import Card from "../components/Card"
import Navbar from "../components/Navbar"

import gambar1 from "../assets/satu.png"
import gambar2 from "../assets/dua.png"

export default class Home extends Component {
    render() {
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

const styles = StyleSheet.create({})
