import router from '../router/index'
export default function ExcuteRoute(){
    const routePack=import.meta.globEager("../router/home/**/*.js")
    for(const val of Object.values(routePack)){
        router.addRoute('home',val.default)
    }
    const routePack1=import.meta.globEager("../router/dashboard/*.js")
    for(const val of Object.values(routePack1)){
        router.addRoute('home',val.default)
    }
}