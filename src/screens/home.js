import React, { Component } from 'react'
import { View, Image, Button, Modal, ActivityIndicator } from 'react-native'

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: '首页',
  }
  constructor (props) {
    super(props)
    this.state = {
      visible: false,
      loading: true
    }
  }
  render () {
    const { visible, loading } = this.state
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="请点我" onPress={() => {
          console.log('visible: ', visible)
          this.setState(preState => {
            return { visible: !preState.visible }
          })
        }} />
        <Modal
          animationType="slide"
          transparent={false}
          visible={visible}
          onRequestClose={() => {}}
        >
          <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {
              loading && <ActivityIndicator style={{ position: 'absolute' }} size="large" />
            }
            <Image
              onLoadEnd={() => {
                this.setState({ loading: false })
              }}
              source={{ uri: 'https://imgs.xkcd.com/comics/waiting_for_the_but.png' }} style={{ width: 300, height: 400 }} />
            <Button
              title="返回"
              style={{ marginTop: 20 }}
              onPress={() => {
                this.setState({ visible: false }, () => {
                  this.props.navigation.navigate('My')
                })
              }} />
          </View>
        </Modal>
      </View>
    )
  }
}