import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import {useState,useEffect,useContext} from 'react'
import { connect } from 'react-redux'
import { View, Button, Text, Image, Input } from '@tarojs/components'
import "taro-ui/dist/style/components/badge.scss";
import { AtBadge, AtButton } from 'taro-ui'
import './index.css'
import img from '../../mock/primaryImage.png'
import {windowHeight} from '../../../common/screenInfo'
// const info = Taro.getSystemInfoSync()
// const { windowHeight, statusBarHeight, titleBarHeight } = info
export default function () {
    const [Img,setImg]=useState(img);
    const [nick,setNick]=useState('小明');
    const choose=()=>{
        Taro.chooseImage({
            count:1,
            success(e){
                setImg(e.tempFilePaths);
            }
        })
    }
    const save=()=>{
        //post
        Taro.showLoading({
            title:'正在上传',
        });
        setTimeout(() => {
            console.log(Img,nick,'saved');
        if(true){
            Taro.hideLoading();
            Taro.showToast({
                title:'成功',
                icon:'success',
                duration:1500,
            });
            //goto
            Taro.redirectTo({
                url:'../postPage/index',
            });
        }
        }, 2000);
    }
    console.log(Img,nick);
    return (
        <View className="gray" style={{
            height: windowHeight + 'px',
        }}>
            <View style={{
                height: windowHeight / 5 + 'px',
            }}></View>
            <View className="beincenter ">
                <View className="touxiang arc">
                    <View className="ycenter">
                        <Text className="mright">我的头像</Text>
                    </View>
                    <Image className="circle" src={Img} onClick={choose}>
                    </Image>
                </View>
                <View>
                    <View className="nickname arc">
                        <Text className="mright nick">我的昵称</Text>
                        <View style={{
                            margin:'auto'
                        }}>
                            <Input style={{
                                marginLeft: '40px',
                            }}
                                placeholder="nickname"
                                value={nick}
                                onChange={(e)=>setNick(e.detail.value)}
                                size="10"></Input>
                        </View>
                    </View>
                </View>
                <View style={{
                    height: windowHeight / 10 + 'px',
                }}></View>
                <View style={{
                    textAlign: 'center',
                }}>
                    <Button className="button"
                        style={{
                            marginRight: '50px',
                        }}
                    >取消</Button>
                    <Button className="button" onClick={()=>save()}>保存</Button>
                </View>
            </View>
        </View >
    );
}