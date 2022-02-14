export default function ExcuteMenu(menus){
    let VueMenu=[]

    menus.forEach(item => {
        let SubMenu={}
        // Id
        SubMenu.id=item.id
        // name
        SubMenu.name=item.title   
        // 随机图标
        SubMenu.icon=getIcon()
        SubMenu.nodeIndex=item.nodeIndex
        SubMenu.children=ChildrenNode(item.nodes)
        VueMenu.push(SubMenu)
    });
    return VueMenu
}

function ChildrenNode(nodes){
    if(nodes==null){
        return []
    }
    let cMenu=[]
    nodes.forEach(x=>{
        let sub={}
        sub.id=x.id
        sub.name=x.title
        sub.icon=getIcon()
        sub.nodeIndex=x.nodeIndex
        if(x.nodes==null){
            sub.src=x.nodeData?.outsideurl
            sub.children=[]
        }else{
            sub.children=ChildrenNode(x.nodes)
        }
        cMenu.push(sub)      
    })
    return cMenu
}

function getIcon(){
    let iconCount=icons.length
    let random =parseInt(Math.random()*iconCount)
    return icons[random]  
}
const icons=[
    "step-backward-outlined",
    "step-forward-outlined",
    "play-circle-outlined",
    "up-square-outlined",
    "down-square-outlined",
    "fullscreen-outlined",
    "plus-outlined",
    "pause-outlined",
    "apple-outlined",
    "appstore-outlined",
    "bars-outlined",
    "ci-outlined",
    "calendar-outlined",
    "desktop-outlined",
    "eye-outlined",
    "export-outlined",
    "fire-outlined",
    "loading3-quarters-outlined",
    "menu-outlined",
    "search-outlined",
    "security-scan-outlined",
    "select-outlined",
    "send-outlined",
    "shopping-outlined",
    "sound-outlined",
    "unlock-outlined",
    "wifi-outlined",
    "insert-row-above-outlined",
    "skin-two-tone"
]