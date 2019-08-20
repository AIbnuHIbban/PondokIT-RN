import React, { Component } from 'react'
import { 
  Text, 
  StyleSheet, 
  View, 
  Image, 
  TextInput,
  ScrollView, 
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import ListCard from './components/ListCard'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      nama : ''
    }
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{backgroundColor:'#006051',height:60,width:'100%'}}>
          <View style={{flexDirection: "row"}}>
            <Icon name="arrowleft" size={25} color="#fff" style={{paddingRight:20,lineHeight:60,marginLeft:20}} />
            <Text style={{marginLeft:5,fontSize:20,color:'white',lineHeight:60,fontWeight:'bold'}}>
              Profil
            </Text>
            <Text style={{paddingLeft:10,fontSize:20,color:'white',lineHeight:60,fontWeight:'bold'}}>
              {this.state.nama}
            </Text>
          </View>
        </View>
        <ScrollView>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: "center", marginVertical: 40}}>
            <TouchableHighlight>
              <Image style={{ borderRadius:100, width:170, height:170, }} source={require('./assets/profile.png')} />
            </TouchableHighlight>
          </View>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <TouchableNativeFeedback>

              <ListCard text="Nama" subText="AibnuHibban" deskripsi="lorem ipsum dolor sit amet blas 
            kajska ljasjas alskalsa alkslka aksasa lkslaksla laksalksa alksa" ikon="user"/>
            
            </TouchableNativeFeedback>
            
            <TouchableOpacity>

              <ListCard text="Info" deskripsi="Enjoy" ikon="infocirlceo"/>

            </TouchableOpacity>

            <TouchableWithoutFeedback>
              <ListCard text="Telepon" deskripsi="6281324323339" ikon="phone"/>
            </TouchableWithoutFeedback>
          </View>
          <TextInput
            onChangeText={(nama) => this.setState({nama})}
            value={this.state.nama}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
