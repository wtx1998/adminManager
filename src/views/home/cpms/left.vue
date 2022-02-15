<template>
    <a-layout-sider class="left" v-model:collapsed="collapsed" collapsible @collapse="emitColl">
        <div class="logo">
            <img src="https://next.antdv.com/assets/logo.1ef800a8.svg" alt="logo" />
            <h2 v-if="!collapsed">Ant Design Vue</h2>
        </div>
        <n-scrollbar :style="{ height: menuHeight }">
            <a-menu mode="inline" :selectedKeys="selectKey">
                <a-menu-item key="index" @click="backHome()">
                    <template #icon>
                        <HomeFilled />
                    </template>
                    首页
                </a-menu-item>
                <template v-for="item in Menus" :key="item.id">
                    <a-sub-menu>
                        <template #icon>
                            <component :is="item.icon" />
                        </template>
                        <template #title>  {{ item.name }}</template>
                        <template v-for="(sub,sIndex) in item.children" :key="sIndex">
                            <template v-if="sub.children.length==0">
                                <a-menu-item :key="sub.id" @click="linkTo(sub)">
                                    <template #icon>
                                        <component :is="sub.icon" />
                                    </template>
                                    {{ sub.name }}
                                </a-menu-item>
                            </template>
                            <template v-else>
                                <a-sub-menu :title="sub.name" :key="sub.id">
                                    <a-menu-item  v-for="child in sub.children"  :key="child.id" @click="linkTo(child)">
                                        <template #icon>
                                           <component :is="child.icon" />
                                        </template>
                                        {{ child.name }}
                                    </a-menu-item>
                                </a-sub-menu>
                            </template>
                        </template>
                    </a-sub-menu>
                </template>
            </a-menu>
        </n-scrollbar>
    </a-layout-sider>
</template>
<script setup >
import { ref, onMounted, computed, h } from 'vue';
import emitter from '../../../utils/mitt';
import { NScrollbar, NIcon } from 'naive-ui';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import {  HomeFilled } from '@ant-design/icons-vue';
const store = useStore()
const menuHeight = computed(() => {
    return (document.body.clientHeight - 99) + 'px'
})
const indent = ref(18)
const selectKey = ref(["index"])
const mode = ref("inline")
// 菜单处理
const Menus = store.state.menus

// 菜单样式
const collapsed = ref(false)

// 重新加载时 重置展开收缩状态
onMounted(() => {
    emitter.on("changeC", e => {
        collapsed.value = e
    })
})

const emitColl = (e) => {
    emitter.emit("siderColl", e)
}
const route= useRoute()
// 跳转
const linkTo= (e)=>{
    selectKey.value[0]=e.id
console.log(route);

    route.push(e.src)
}
// 首页
const backHome=()=>{
    selectKey.value[0]="index"
}

</script>

<style lang="scss">
.left {
    border-right: 1px solid #efefef;
}

.left {
    border-right: 1px solid #efefef;
}
.c-scrollbar-bar-h-bar {
    display: none;
}
.ant-menu-inline,
.ant-menu-vertical,
.ant-menu-vertical-left {
    border: none;
}
.ant-layout-sider {
    background-color: #fff;
}
.logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #efefef;
    img {
        padding-top: 5px;
        width: 40px;
        height: 40px;
    }
}
.widthStyle {
    width: 80px;
}
.el-menu {
    border-right: none !important;
}
.el-aside {
    // 侧边栏折叠动画速度
    transition: width 0.25s;
    -webkit-transition: width 0.25s;
    -moz-transition: width 0.25s;
    -webkit-transition: width 0.25s;
    -o-transition: width 0.25s;
}
.n-menu-item-content--collapsed {
    padding-left: 24px !important;
}
</style>