import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Time from './Time.js'
import RoomPicker from './RoomPicker'
import InputArea from './InputArea'
import './index.css'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View>
        <View>
          <Time />
          <Text className='rightfloat'>发布</Text>
        </View>
        <RoomPicker></RoomPicker>
        <InputArea></InputArea>
        <View className='index'>
        </View>
      </View>
    )
  }
}
