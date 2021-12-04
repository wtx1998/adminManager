import {createStore} from 'vuex';
import { login,GetMenu } from '../apis/login'
import { message } from 'ant-design-vue'
import {setStorage,setToken} from '../utils/storage';

const store=createStore({
    state(){
        return {
            token:'',
            userinfo:{},
            menus:[]
        }
    },
    getters:{
        
    },
    mutations:{
       SET_TOKEN(state,payload){
           state.token=payload
       },
       SET_USERINFO(state,payload){
           state.userinfo=payload
       },
       SET_MENU(state,payload){          
           state.menus=payload
       }
    },
    actions:{
        Login_User({commit,dispatch},payload){
            return new Promise((reslove,reject)=>{
                var data={
                    UserName:payload.UserName,
                    Password:payload.Password,
                    Type:payload.Type
                }
                login(data)
                .then(res => {
                    if (!res.Result) {
                        message.error(res.Info);
                        reslove()
                        return
                    }
                    if (payload.remember) {
                        setStorage('userId', payload.UserName)
                    }
                    setStorage("USER_INFO",JSON.stringify(res.Data.userinfo))
                    commit("SET_USERINFO",res.Data.userinfo)
                    commit("SET_TOKEN",res.Data.AccessToken)
                    setToken(res.Data.AccessToken)
                    message.success(res.Info, 2)
                    dispatch("login_Menu").then(()=>{reslove()})
                })
                .catch(err => {
                    message.error(err);
                    reject()
                })
            })          
        },
        login_Menu({commit}){
            return new Promise((reslove,reject)=>{
                GetMenu()
                .then(res=>{
                    commit("SET_MENU",res.Data)
                    setStorage("menus",JSON.stringify(res.Data))
                    reslove()
                }).catch(()=>{reject()})
            })
        }
    }
})
export default store