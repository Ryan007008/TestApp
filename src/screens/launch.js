import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default class LaunchScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 3
    }
  }
  componentDidMount () {
    this.interval = setInterval(() => {
      this.setState(preState => {
        return { count: preState.count - 1 }
      }, () => {
        if (this.state.count === 0) {
          clearInterval(this.interval)
          this.props.navigation.navigate('Routor')
        }
      })
    }, 1000)
  }
  componentWillUnmount () {
    clearInterval(this.interval)
  }
  render () {
    return (
      <View style={styles.bg}>
        <Image source={require('../../assets/image/timg.jpeg')} style={styles.head} />
        <Text style={styles.headFont}>胡叶凡的小测试</Text>
        <View style={styles.time}>
          <Text style={styles.timeFont}>{this.state.count}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  head: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  headFont: {
    fontSize: 17,
    marginTop: 20
  },
  time: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    height: 30,
    width: 60,
    borderRadius: 15,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timeFont: {
    fontSize: 18,
    color: '#fff'
  }
})