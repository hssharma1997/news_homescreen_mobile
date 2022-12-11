import 'react-native-gesture-handler';
import React, { useRef } from 'react';
import { Button, StyleSheet, TouchableOpacity, View} from 'react-native';
import HomePage from './screens/HomePage';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MenuClose from './assests/MenuClose'

const Drawer = createDrawerNavigator();

const App= () => {
 
 
  return (
   
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => {
    return (
      <DrawerContentScrollView {...props}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()} style={{alignItems:'flex-end',marginBottom:30}}>
         <MenuClose />
         </TouchableOpacity>
        <DrawerItemList {...props} />
     
        <DrawerItem label="New" onPress={() => props.navigation.navigate("Login")} labelStyle={{fontFamily: 'Inter-Bold'}} />
        <DrawerItem label="Popular" onPress={() => props.navigation.navigate("Login")} labelStyle={{fontFamily: 'Inter-Bold'}}/>
        <DrawerItem label="Trending" onPress={() => props.navigation.navigate("Login")} labelStyle={{fontFamily: 'Inter-Bold'}} />
        <DrawerItem label="Categories" onPress={() => props.navigation.navigate("Login")} labelStyle={{fontFamily: 'Inter-Bold'}} />
      </DrawerContentScrollView>
    )
  }}
    screenOptions={{
   drawerPosition:'right',
   headerShown:false,
   drawerStyle: {
   padding:16,
 
  },

  }} >
      <Drawer.Screen name="Home" component={HomePage} />
     
    </Drawer.Navigator>
  </NavigationContainer>
 
    

  
  );
};

const styles = StyleSheet.create({
 
});

export default App;
