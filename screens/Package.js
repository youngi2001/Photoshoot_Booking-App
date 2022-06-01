import { StatusBar } from 'expo-status-bar';
import React from "react";
import { useCallback } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet, Image,} from "react-native";
import { Alert, Linking, } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import adultface from "../assets/adultface.jpg";
import babyphoto from "../assets/babyphoto.jpg";
import family from "../assets/familyphotoshoot.jpg";
import wedding from "../assets/weddingphoto.jpg";
import birthday from "../assets/birthday.jpg";


const supportedURL = "https://docs.google.com/forms/d/e/1FAIpQLSck-JffYTQq2BHzDJwp01L-KeH388i0uzSE60_gS5ugMHA4FA/viewform?usp=sf_link";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};



export default function Package(){
    return(
        <View style={{flex:1, backgroundColor:"#16181c"}}>
            <View style={{marginTop:"10%", alignItems:"center", marginBottom: 20}}>
                <Text style={{color:"blue", fontSize:25}}>we got you <Text style={{color:"white", }}> Covered!</Text> </Text>

            </View>
            <ScrollView>
                <View style={{height:400, marginBottom: 10}}>
                    <Image source={adultface} style={{ height:400, width:"100%"}}/>
                    <View style={styles.absolute}>
                        <OpenURLButton url={supportedURL}>10 Photos for GHC750</OpenURLButton>
                    </View>

                </View>

                <View style={{height:400, marginBottom: 10}}>
                    <Image source={babyphoto} style={{ height:400, width:"100%"}}/>
                    <View style={styles.absolute}>
                        <OpenURLButton url={supportedURL}>10 Photos for GHC750</OpenURLButton>
                    </View>

                </View>
                <View style={{height:400, marginBottom: 10}}>
                    <Image source={family} style={{ height:400, width:"100%"}}/>
                    <View style={styles.absolute}>
                        <OpenURLButton url={supportedURL}>10 Photos for GHC900</OpenURLButton>
                    </View>

                </View>
                <View style={{height:400, marginBottom: 10}}>
                    <Image source={wedding} style={{ height:400, width:"100%"}}/>
                    <View style={styles.absolute}>
                        <OpenURLButton url={supportedURL}>10 Photos for GHC650</OpenURLButton>
                    </View>

                </View>
                <View style={{height:400, marginBottom: 10}}>
                    <Image source={birthday} style={{height:400, width:"100%"}}/>

                    <View style={styles.absolute}>
                        <OpenURLButton url={supportedURL}>10 Photos for GHC550</OpenURLButton>
                    </View>

                </View>

            </ScrollView>
            
            
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

        absolute: {
            position: "absolute",
            top: "80%",
            left: "5%",
            right: 0,
            bottom: 0,
            width:"60%",
          },
      });


