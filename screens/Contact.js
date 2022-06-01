import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet, Image,} from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import call from 'react-native-phone-call';




export default function Contact(){
    const triggerCall = () => {
        const args = {
            number: "+123456789",
            prompt: false,
          };
          // Make a call
          call(args).catch(console.error);

    };

     
        

    return(
        <View style={{flex: 1, backgroundColor:"#16181c" , }}>

        <View style={{marginBottom:10, marginTop: 40, marginLeft:10 }}>
            <Text style={{fontSize:27, color:"white"}}>Contact Information</Text>
            <Text style={{fontSize:15, color:"white", marginBottom:60}}>For more information please contact us through any of the following channels</Text>
        </View>


        <View style={{backgroundColor:"#868c06", borderRadius:30, marginBottom:100, marginLeft:"10%", marginRight:"10%", padding:30 }}>
            <TouchableOpacity onPress={triggerCall}>
                <View style={{flexDirection:"row", marginBottom:"3%"}}>
                    <Ionicons name="ios-call" size={24} color="white" />
                    <Text style={{color: "white" ,fontSize:20, marginLeft:10}}>
                        Phone Number 
                    </Text>
                </View>
                <View style={{marginLeft:"2%"}}>
                    <Text style={{color: "white" ,fontSize:20 , marginLeft:10}}> +0123 4567 89 </Text>

                </View>

            </TouchableOpacity>
            

        </View>

        <View style={{backgroundColor:"#868c06", borderRadius:30, marginBottom:100, marginLeft:"10%", marginRight:"10%", padding:30 }}>
            <View style={{flexDirection:"row", marginBottom:"3%"}}>
                <MaterialIcons name="email" size={24} color="white" />
                <Text style={{color: "white" ,fontSize:20, marginLeft:10}}>
                    Email 
                </Text>
            </View>
            <View style={{marginLeft:"2%"}}>
                <Text style={{color: "white" ,fontSize:20 , marginLeft:10}}>booking@gmail.com</Text>

            </View>

        </View>

        <View style={{backgroundColor:"#868c06", borderRadius:30, marginBottom:100, marginLeft:"10%", marginRight:"10%", padding:30 }}>
            <View style={{flexDirection:"row", marginBottom:"3%"}}>
            <Entypo name="location" size={24} color="white" />
                <Text style={{color: "white" ,fontSize:20, marginLeft:10}}>
                Location 
                </Text>
            </View>
            <View style={{marginLeft:"2%"}}>
                <Text style={{color: "white" ,fontSize:20 , marginLeft:10}}>East Legon Near KFC</Text>

            </View>

        </View>

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

        

      });



