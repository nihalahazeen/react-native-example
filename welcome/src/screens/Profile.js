import React from 'react';  
import { StyleSheet, View, Text, Button, Image } from 'react-native';  
  
export default class Profile extends React.Component {    
    render() {   
        return (  
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
                <View style={styles.container_text}>
                    <Text style={styles.title}>Profile Screen</Text>                    
                </View> 
            </View>  
        );  
    }  
}  
