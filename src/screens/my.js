import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class MyScreen extends Component {
  static navigationOptions = {
    title: '个人',
  }
  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>这是一个自我想象的页面</Text>
      </View>
    )
  }
}