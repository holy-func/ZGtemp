import Taro from '@tarojs/taro'
const info = Taro.getSystemInfoSync();
console.log(info);
const { windowHeight, statusBarHeight, titleBarHeight,windowWidth } = info
export { windowHeight, statusBarHeight, titleBarHeight ,windowWidth};