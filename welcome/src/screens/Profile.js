import React from 'react';  
import { StyleSheet, View, Text, Button, Image, TouchableOpacity} from 'react-native';  
  
export default class Profile extends React.Component {
    constructor(props){
        super(props);

        const id = this.props.navigation.getParam('id') ;
        const name = this.props.navigation.getParam('name') ;
        const bio = this.props.navigation.getParam('bio') ;
        const picture = this.props.navigation.getParam('picture') ;

        this.state = {
        id:id,
        name:name,
        bio:bio,
        picture:picture

    }
      }
    render() {   
        return (  
            <View style={styles.container}>  
            <TouchableOpacity>
            <View style={styles.listItem}>
                <Image source={{uri:this.state.picture}}  style={{width:130, height:130,borderRadius:65, marginTop:10}} />
                <Text style={{fontSize:20, marginTop:20}}>{this.state.name}</Text> 
                <Text style={{marginTop:20}}>{this.state.bio}</Text>
            </View>    
            </TouchableOpacity>
            </View>  
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
        //flexDirection:"row",
        borderRadius:5,
        alignItems:'center'
    },
    containerText: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
    },
});