/// 获取状态的函数
import {mapGetters,createNamespacedHelpers} from 'vuex';
import {useMapper} from './useMapper';
export function useGetter(moduleId,arg){
    let getters =mapGetters
    if(typeof moduleId==="string" && moduleId.length>0){
        getters = createNamespacedHelpers(moduleId).mapGetters
    }
    return useMapper(arg,getters)
}