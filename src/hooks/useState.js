/// 获取状态的函数
import {mapState,createNamespacedHelpers} from 'vuex';
import {useMapper} from './useMapper';
export function useState(arg){
    let states =mapState
    if(typeof moduleId==="string" && moduleId.length>0){
        states = createNamespacedHelpers(moduleId).mapState
    }
    return useMapper(arg,states)
}