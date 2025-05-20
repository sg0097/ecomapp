import React from 'react';
import { View, Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screen/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';
import ProductDetailScreen from './src/screen/ProductDetailScreen';
import CartScreen from './src/screen/CartScreen';
import { CartProvider } from './src/context/CartContext';
import { CartContext } from './src/context/CartContext';
import { useState } from 'react';
import { useContext } from 'react';




const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



function Home() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
 const MyHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}   >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailScreen} />
      </Stack.Navigator>
  );
        }
  

const App = () => {
  return (
    <CartProvider>

    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#E96E6E",
      }}
      
      >
      <Tab.Screen 
        name="HOME_STACK" 
        component={MyHomeStack} 
        options={{
          tabBarIcon: ({size,focused,color}) =>{
            return <Entypo name={"home"} size={size} />;
          },
        }}
      />
        <Tab.Screen name="Reorder" component={Home} options={{
          tabBarIcon: ({size,focused,color}) =>{
            return <MaterialIcons name={"reorder"} size={size} />;
          },
        }} />
        <Tab.Screen 
        name="Cart" 
        component={CartScreen} 
        options={{
          tabBarIcon: ({size,color}) =>{
            const {carts} = useContext(CartContext);
            return (
              <View style={{position: "relative"}}>
              <MaterialCommunityIcons
              name={"cart"}
              size={size}
              color={color}
              />
              <View style={{
                height:14,
                width:14,
                borderRadius:7,
                backgroundColor: "#E55B5B",
                position: "absolute",
                top:-10,
                right:-5,
                justifyContent: "center",
                alignItems: "center",

              }}>
                <Text  style={{fontSize:10,color:"white",FontWeight:"500"}}> {carts?.length}</Text>
              </View>
              </View>
            )
          },  
        }} />
        <Tab.Screen name="Account" component={Home} options={{
          tabBarIcon: ({size,focused,color}) =>{
            return <FontAwesome6 name={"user"} size={size} />;
          },
        }} />
      </Tab.Navigator>
    </NavigationContainer>
    </CartProvider>
  );
};

export default App;
