import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from "./screens/Welcome";
import Info from "./screens/Info";
import Package from "./screens/Package";

export default function App() {
  
  const MainNavigator = createStackNavigator();

  return (
    <View style={{flex:1}}>
      <NavigationContainer>
        <MainNavigator.Navigator screenOptions={{headerShown:false}} initialRouteName="Welcome">
          <MainNavigator.Screen name='Welcome' component={Welcome} />
          <MainNavigator.Screen name='Info' component={Info} />
          <MainNavigator.Screen name='Package' component={Package} />
        </MainNavigator.Navigator>
      </NavigationContainer>
      
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
