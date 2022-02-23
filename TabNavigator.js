import React,{Component} from 'react';
import {Text, View} from 'react-native';
import {CreateBottomNavigator} from 'react navigation/bottom-tabs';
import Feed from './screens/feed.js';
import CreatPost from '../screens/CreatePost';
import {DrawerNavigation} from '@react-navigation/drawer'

const Tab = createBottomTabNavigator();

const BBottomTabNavigator = () => {
    return (
        <Tab.Navigator
           screenOptions={({ route }) => ({
               tabBArIcon: ({ focused, color, size }) => {
                   let iconName;
                   if(route.name === 'Feed'){
                       iconName = focused
                       ? 'book'
                       :'book-outline';

                   } else if (route.name === 'CreatePost'){
                       iconName = focused ? 'create' : 'create-outline';
                   }
                   return <IonsIcons name={iconName} size={size} color={color} />;
                },
           })}
           tabBarOptions={{
               activeTintColor: 'tomato',
               inactiveTintcolor: 'gray',
           }}
    >
           <Tab.Screen name="Feed" component={Feed}   />
           <Tab.Screen name="CreatePOst" component={CreatePost}  />
           </Tab.Navigator>
       );
 }

 export default BottomTabNavigator 



                  

               