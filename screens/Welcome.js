import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View, Text, Button, TouchableOpacity,StyleSheet, Image,} from "react-native";
import lens from "../assets/cameralens.png"




export default function Welcome({navigation}){
    return(
        <View style={{flex:1, backgroundColor:"#16181c"}}>

            <View style={styles.welcomeView}>
                <Text style={styles.welcomeText}>Experience </Text>
                <Text style={styles.welcomeText}>Photography</Text> 
                <Text style={styles.welcomeText}>In a new </Text>
                <Text  style={styles.welcomeText}>Dimension</Text>

            </View>

            <View style={{width: "90%", height: "35%", marginBottom:30 }}>
                <Image source={lens} style={{ width: 250, height: 250, resizeMode: "contain", marginLeft: 20 }}/>
                <Text style={styles.absolute}>capture every moment</Text>

            </View>
            
            <View>
                <TouchableOpacity style={{}} onPress={()=>{navigation.navigate("Info")}} > 
                    <Text style={styles.bookingView}>Book Appiontment</Text>
                </TouchableOpacity>
            </View>
            
            <StatusBar style="auto" />
        </View>
    );

}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    welcomeText: {
        fontSize:50,
        fontWeight: '400',
        marginVertical:5,
        color: "white"
        

    },
    welcomeView: {
        marginTop:"15%",
        paddingHorizontal: 30,


    },
    bookingView: {
        fontSize:25, 
        marginLeft:30, 
        backgroundColor: "#612478", 
        width: 230, 
        borderRadius: 10, 
        paddingHorizontal: 10,
        padding: 10,
        color: "white"

    },

    absolute: {
        position: "absolute",
        top: 110,
        left: 135,
        right: 0,
        bottom: 0,
        color:"white",
        fontSize:20,
      },
  });



