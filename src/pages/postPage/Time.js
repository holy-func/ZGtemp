import React,{useState,useEffect,useContext} from 'react'
import { View} from '@tarojs/components'
export default function(props){
    const time=new Date();
    let show='';
    show+=time.getFullYear();
    show+='.';
    let temp=time.getMonth()+1;
    show+=temp>9?temp.toLocaleString():'0'+temp.toLocaleString();
    show+='.';
    temp=time.getDate();
    show+=temp>9?temp.toLocaleString():'0'+temp.toLocaleString();
    return (
        <View style={{
            // display:'inline-block',
            position:'absolute',
            width:'100%',
            fontSize:'30rpx',
            textAlign:'center',
            lineHeight:'45px',
        }
        }>{show}</View>
    )
  }
  