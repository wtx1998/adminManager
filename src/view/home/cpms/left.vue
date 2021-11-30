<template>
    <a-layout-sider class="left" v-model:collapsed="collapsed" collapsible @collapse="emitColl">
        <div class="logo">
            <img src="https://next.antdv.com/assets/logo.1ef800a8.svg" alt="logo" />
            <h2 v-if="!collapsed">Ant Design Vue</h2>
        </div>
        <c-scrollbar :style="{ height: menuHeight }" trigger="hover">
            <a-menu :mode="mode" :selectedKeys="selectKey">
                <a-menu-item key="index">
                    <template #icon>
                        <HomeFilled />
                    </template>
                    首页
                </a-menu-item>
                <a-sub-menu :key="item.id" v-for="(item, index) in Menus">
                    <template #icon>
                        <user-outlined />
                    </template>
                    <template #title>{{ item.title }}</template>
                    <template v-for="(sub,sIndex) in item.nodes" :key="sIndex">
                        <a-menu-item v-if="sub.nodes == null" :key="sub.id">
                            <template #icon>
                                <user-outlined />
                            </template>
                            {{ sub.title }}
                        </a-menu-item>
                        <a-sub-menu v-else :title="sub.title" :key="sub.nodeData.SYSYID">
                            <a-menu-item v-for="(child,cIndex) in sub.nodes" :key="child.id">
                                <template #icon>
                                    <UserAddOutlined />
                                </template>
                                {{ child.title }}
                            </a-menu-item>
                        </a-sub-menu>
                    </template>
                </a-sub-menu>
            </a-menu>
        </c-scrollbar>
    </a-layout-sider>
</template>
<script setup >
import { ref, reactive, defineProps, watch, onMounted, computed } from 'vue';
import { GetMenu } from '../../../apis/home';
import { CScrollbar } from 'c-scrollbar';
import { UserOutlined, UserAddOutlined, HomeFilled } from '@ant-design/icons-vue';
import emitter from '../../../utils/mitt';

const menuHeight = computed(() => {
    return (document.body.clientHeight - 99) + 'px'
})

const selectKey = ref(["index"])

// 菜单
const Menus = ref([])
// 菜单样式
const mode = ref("inline")
const GetCurrentMenus = () => {
    GetMenu()
        .then(res => {
            Menus.value = res.Data
        })
        .catch(err => {

        })
}
GetCurrentMenus()
const collapsed = ref(false)

onMounted(() => {
    emitter.on("changeC", e => {
        collapsed.value = e
    })
})

const emitColl = (e) => {
    emitter.emit("siderColl", e)
}


</script>

<style lang="scss">
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
</style>