import React, { Component } from 'react'
import { View, Text } from 'react-native'
import HomeScreen from './screens/home'
import MyScreen from './screens/my'
import LaunchScreen from './screens/launch'
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
})

HomeStack.navigationOptions = {
  tabBarLabel: '首页',
}

const MyStack = createStackNavigator({
  My: MyScreen,
})

MyStack.navigationOptions = {
  tabBarLabel: '个人',
}

const Router = createBottomTabNavigator({
  Home: HomeStack,
  My: MyStack
}, {
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
})

const LaunchStack = createSwitchNavigator({
  Launch: LaunchScreen,
  Routor: Router
})

export default createAppContainer(LaunchStack)
