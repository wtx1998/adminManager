/// 状态 统一接口
import {useStore} from 'vuex';
import {computed} from 'vue';
export function useMapper(arg,mapFn){
    const store=useStore();
    const storeStateFns=mapFn(arg)
    const storeState = {}
    Object.keys(storeStateFns).forEach(fnKey => {
      const fn = storeStateFns[fnKey].bind({$store: store})
      storeState[fnKey] = computed(fn)
    })
    return storeState;
}