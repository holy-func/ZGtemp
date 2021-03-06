import React, { useState, useEffect, useContext } from 'react'
import Taro from '@tarojs/taro'
import { Textarea, Text, View } from '@tarojs/components'
// import Taro from '@tarojs/taro'
import { AtTextarea } from 'taro-ui'
import "taro-ui/dist/style/components/textarea.scss";
import { windowWidth } from '../../../common/screenInfo';
export default function () {
    const [val, setVal] = useState(700);
    let max = 1400;
    let save = (e) => {
        setVal(e.target.value);
        // Taro.setStorageSync('input',e.target.value);
    }
    return (
        <>
            <Textarea
                value={val}
                maxlength={max}
                onInput={save}
                style={{
                    height: '400px',
                    width: '90%',
                    margin: '-20px auto',
                    border: '1px solid rgb(234,234,234)',
                }}
            >
            </Textarea >
            <View style={{
                height: '13px',
            }}>
               
            </View>
            <View 
            style={{
                textAlign:'right',
                marginRight:'25px',
            }}>
            <Text
                    style={{
                        textAlign: 'right',
                        width: windowWidth + 'px',
                        color: 'rgb(200,200,200)',
                        fontSize: '0.7em',
                    }}
                >{String(val).length + '/' + max}</Text>
            </View>

        </>
    );
}