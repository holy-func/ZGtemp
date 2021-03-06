import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'
import { add, minus, asyncAdd } from '../../actions/counter'
import "taro-ui/dist/style/components/badge.scss";
import { AtBadge ,AtButton} from 'taro-ui'
import './index.css'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add(e) {
    dispatch(add(1+e))
  },
  dec() {
    dispatch(minus())
  },
  asyncAdd() {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <AtBadge value={10} maxValue={99}>
          <AtButton size='small'>按钮</AtButton>
        </AtBadge>
        <Button className='add_btn' onClick={()=>this.props.add(3)}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}

export default Index

