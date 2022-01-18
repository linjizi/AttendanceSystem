import {View, Text, Input, Button} from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.less'

const Login = () => {
  const login = () => {
    Taro.getUserProfile({desc: 'getUserProfile'}).then(({userInfo}) => {
      if(userInfo){
        Taro.login().then(res => {
          if(res.code){
            Taro.request({
              url: 'http://127.0.0.1:4000/login',
              data: {
                code: res.code
              },
              success: (result) => {
                console.log(result)
              },
              fail: (err) => {
                console.log(err)
              }
            })
          }
        })
      }
    }).catch(err => console.log(err))
  }
  return (
    <View className='login-container'>
      <Input placeholder='请输入学号/工号'></Input>
      <Button onClick={login}>登录</Button>
    </View>
  )
}
export default Login
