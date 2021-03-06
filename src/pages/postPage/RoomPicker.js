import React, { useState, useEffect, useContext } from 'react'
import { Image, View, Text } from '@tarojs/components'
import { connect } from 'react-redux'
import {changeRoom} from '../../actions/room'
import planet_1 from './static/icon_planet_1.png'
import planet_2 from './static/icon_planet_2.png'
import planet_3 from './static/icon_planet_3.png'
import planet_4 from './static/icon_planet_4.png'
import planet_5 from './static/icon_planet_5.png'
import offqiu from './static/list/qiulogo.png'
import offsan from './static/list/sanlogo.png'
import './index.css'
import {windowWidth} from '../../../common/screenInfo'
const mapStateProps=(state)=>({roomid:state.room});
const mapDispatchToProps=(dispatch)=>({change:(roomid)=>dispatch(changeRoom(roomid)),});
export default connect(mapStateProps,mapDispatchToProps)(RoomPicker);
function RoomPicker (props) {
    console.log(props);
    const {roomid,change}=props;
    let arr = [planet_1, planet_2, planet_3, planet_4, planet_5];
    let map = ['个人', '脑洞', '探梦', '情绪', '沉思'];
    const [showNum, setNum] = useState(0);
    const [qiu, setqiu] = useState(arr[roomid]);
    const [san, setsan] = useState(offsan);
    const [room, setRoom] = useState(map[roomid]);
    const showList = function () {
        setNum(showNum ? 0 : 5);
    }
    const turnTo = (r) => {
        let name = map[arr.indexOf(r)];
        showList();
        setRoom(name);
    }
    return (
        // <View
        //     className="clearFloat"
        //     style={{
        //         width: '138px',
        //         overflow: 'wrap',
        //         // float: 'right',
        //         marginRight: '20px',
        //         backgroundColor: 'white',
        //     }}>
            <View
                // onClick={showList}
                onClick={()=>{change(1),setqiu(arr[roomid+1])}}
                style={{
                    // textAlign: 'right',
                    transform: 'scale(0.8)',
                    height:'80px'
                }}>
                {/* <Image
                    style={{
                        width: '20.84px',
                        height: '17px',
                        verticalAlign: 'middle',
                    }}
                    mode='widthFix'
                    src={qiu}
                ></Image> */}
                {/* <Text
                    style={{
                        fontSize: '18px',
                        lineHeight: '36px'
                    }}>{room+'空间站'}</Text> */}

                    <Image
                    style={{
                        width:'200px',
                        marginLeft:windowWidth-150+'px'
                    }}
                    src={qiu}
                    mode='widthFix'
                    ></Image>
                {/* <Image
                    style={{
                        width: '12px',
                        height: '8px',
                    }}
                    src={san}></Image> */}
            {/* </View> */}
            {/* <View
                style={{
                    width: '150px',
                    height: showNum ? '180px' : '0px',
                    borderRadius: '10px',
                }}
            >
                {arr.slice(0, showNum).map(r => (
                    <Image
                        className='highzindex'
                        src={r}
                        key={r}
                        // onClick={() => turnTo(r)}
                        style={{
                            width: '138px',
                            height: '36px',
                        }}
                        mode='aspectFit'
                    ></Image>
                ))} */}
                {/* {showNum ? (
                    <View>
                        <Text style={{
                            // width: '5px',
                            // height: '5px',
                            borderRadius: '50%',
                            // border: '1px solid rgb(200,200,200)',
                        }}>
                            ?
                </Text>
                        <Text>个人空间站发布内容仅个人可见</Text>
                    </View>
                ) : ''} */}
            {/* </View> */}

        </View>
    )
}