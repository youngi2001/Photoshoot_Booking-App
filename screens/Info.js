import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet, Image,} from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import shoot from "../assets/shoot.jpg";
import booking from "../assets/booking.jpg";
import receive from "../assets/receive.jpg";
import Package from './Package';






export default function Info({navigation}){
    return(
        <View style={{backgroundColor:"#16181c", width:"100%", alignContent:"center", justifyContent:"center" }}>

        <View style={{marginTop:"5%", width:"100%", flexDirection:"row", marginBottom: 3, justifyContent:"space-around"}}> 
            <TouchableOpacity style={styles.categories}>
              <Text style={styles.categoriesText}>Contact</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categories} onPress={()=>{navigation.navigate("Package")}}>
              <Text style={styles.categoriesText}>Packages</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categories}>
              <Text style={styles.categoriesText}>Sign In</Text>
            </TouchableOpacity>
        </View>
        <View style={{marginBottom:10, marginTop: 10, alignItems:"center"  }}>
            <Text style={{fontSize:30, color:"white",}}>How we Operate</Text>
        </View>
            <ScrollView>
                <View style={styles.Workings}>
                    <Text style={styles.workText}>1. Book from our site</Text>
                    <Text style={styles.workText2}>Booking from our site and get in touch with the greatest photograghers in the world without hassle</Text>
                    <Image source={shoot} style={{resizeMode:"contain"}}/>
                </View>
                <View style={styles.Workings}>
                    <Text style={styles.workText}>2. Take the shoot</Text>
                    <Text style={styles.workText2}>The photographer is going to be at your selected time and venue</Text>
                    <Image source={booking} style={{resizeMode:"contain"}}/>
                </View>

                <View style={styles.Workings}>
                    <Text style={styles.workText}>3. Receive your photos</Text>
                    <Text style={styles.workText2}>Photos will be enhanced by our professional editors and will be distributed to you within 24 hours. How 'bout that</Text>
                    <Image source={receive} style={{resizeMode:"contain"}}/>
                </View>
            </ScrollView>

            <Text>Experience Photography n a new dimension</Text>
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

        categories: {
            marginHorizontal: 10,
            marginTop: 15,
            backgroundColor: "#868c06",
            borderRadius: 15,
            padding: 5,
            paddingHorizontal: 5,
          },

        categoriesText: {
            fontSize:20,
            color: "white"

        },
        Workings: {
            marginHorizontal: 10,
            height:450

        },
        workText: {
            fontSize:24,
            color:"white",
            marginBottom: 10,
            

        },
        workText2: {
            fontSize:16,
            color:"white",
            marginBottom:5

        }

      });



