import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Button } from 'react-native';
import FlatListData from '../data';
import Profile from './Profile'
import {Header, Left, Right, Icon} from 'native-base'
//function Item({ item }) {
//  return (
//    <TouchableOpacity style={{flex:1}}>
//    <View style={styles.listItem}>
//            <Image source={{uri:item.picture}}  style={{width:60, height:60,borderRadius:30}} />
//            <View style={{alignItems:"center",flex:1}}>
//                <Text style={{fontWeight:"bold"}}>{item.name}</Text>
//            </View>
//    </View>
//    </TouchableOpacity>
//  );
//}

export default class Feed extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    data:FlatListData}
  }

  render(){
    return (
      <View style={styles.container}>
        <Header style={{backgroundColor:'white'}}>
          <Text style={{fontSize:24, marginTop:10}}>Feed</Text>
          <Right>
            <Icon name='menu' onPress={() => this.props.navigation.openDrawer()}/>
          </Right>
        </Header>
        <FlatList
          style={{flex:1}}
          data={this.state.data}
          renderItem={({ item }) =>this._renderList(item)}
          keyExtractor={item => item.name}
        />
      </View>
    );
  }
  _renderList = (item) => {
    return (
      <TouchableOpacity onPress={()=>this.props.navigation.navigate("Profile",{id:item._id,name:item.name,bio:item.bio,picture:item.picture})} style={{flex:1}}>
      <View style={styles.listItem}>
              <Image source={{uri:item.picture}}  style={{width:60, height:60,borderRadius:30}} />
              <View style={{alignItems:"center",flex:1, marginTop:20}}>
                  <Text style={{fontWeight:"bold"}}>{item.name}</Text>
              </View>
      </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  listItem:{
    margin:10,
    padding:10,
    backgroundColor:"#FFF",
    width:"80%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  }
});