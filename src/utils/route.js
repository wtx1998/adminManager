import router from '../router/index'
export default function ExcuteRoute(){
    const routePack=import.meta.globEager("../router/home/**/*.js")
   for(const val of Object.values(routePack)){
    router.addRoute('home',val.default)
   }
   
}