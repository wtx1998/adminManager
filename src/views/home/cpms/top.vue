<template>
    <div class="top">
        <div class="top-left">
            <div class="top-left-icon" @click="changeColl">
                <menu-unfold-outlined v-if="collapsed" class="trigger" />
                <menu-fold-outlined v-else class="trigger" />
            </div>
            <div class="top-left-bread">
                <a-breadcrumb class="top-left-bread-item">
                    <a-breadcrumb-item>首页</a-breadcrumb-item>
                    <a-breadcrumb-item>第二个首页</a-breadcrumb-item>
                    <a-breadcrumb-item>第三个首页</a-breadcrumb-item>
                    <a-breadcrumb-item>第四个首页</a-breadcrumb-item>
                </a-breadcrumb>
            </div>
        </div>
        <div class="top-right">
            <div class="top-right-notice" title="通知">
                <BellOutlined class="trigger" />
            </div>
            <a-dropdown class="top-right-language" :trigger="['click']">
                <div title="语言">
                    <translation-outlined class="trigger" />
                </div>
                <template #overlay>
                    <a-menu :selectedKeys="langKey">
                        <a-menu-item key="chinese" @click="changeLang('chinese')">中文</a-menu-item>
                        <a-menu-item key="english" @click="changeLang('english')">English</a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>
            <a-dropdown class="top-right-user">
                <div>
                    <a-avatar
                        class="top-right-user-ava"
                        src="https://cdn.uviewui.com/uview/album/1.jpg"
                        size="30"
                    />
                    <label class="top-right-user-name">{{ userName }}</label>
                </div>
                <template #overlay>
                    <a-menu>
                        <a-menu-item key="chinese">
                            <template #icon>
                                <UserOutlined />
                            </template>
                            个人信息
                        </a-menu-item>
                        <a-menu-divider />
                        <a-menu-item key="chinese">
                            <template #icon>
                                <LockOutlined />
                            </template>
                            锁定屏幕
                        </a-menu-item>
                        <a-menu-item key="english">
                            <template #icon>
                                <LogoutOutlined />
                            </template>
                            退出系统/注销
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>

            <div class="top-right-full" @click="fullScreen" :title="fullscreen ? '退出' : '全屏'">
                <fullscreen-outlined class="trigger" v-if="!fullscreen" />
                <fullscreen-exit-outlined class="trigger" v-else />
            </div>
            <div class="top-right-set" title="设置">
                <SettingOutlined class="trigger" />
            </div>
        </div>
    </div>
</template>

<script setup>
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    FullscreenExitOutlined,
    FullscreenOutlined,
    TranslationOutlined,
    BellOutlined,
    UserOutlined,
    LockOutlined,
    LogoutOutlined,
    SettingOutlined
} from '@ant-design/icons-vue';
import { ref, onMounted } from 'vue';
import emitter from '../../../utils/mitt';
import { useStore } from 'vuex';
// 左侧菜单伸缩
const collapsed = ref(false)
const changeColl = () => {
    collapsed.value = !collapsed.value
    emitter.emit("changeC", collapsed.value)
}
onMounted(() => {
    emitter.on("siderColl", (e) => {
        collapsed.value = e
    })
})

// 全屏
const fullscreen = ref(false)
const fullScreen = () => {
    if (!fullscreen.value) {
        document.body.requestFullscreen()
    } else {
        document.exitFullscreen()
    }
    fullscreen.value = !fullscreen.value
}

// 语言模块
const langKey = ref(['chinese'])
const changeLang = (e) => {
    langKey.value[0] = e
}

const store = useStore()
const userName = store.state.userinfo.USER_Name

</script>

<style lang="scss" scoped>
.top {
    height: 50px;
    line-height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    background-color: #ffffff;
    border-bottom: 1px solid #ffffffcb;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    &-left {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        &-icon {
            padding: 0 13px;
            cursor: pointer;
            &:hover {
                background-color: #ebebeb;
            }
        }
        &-bread {
            padding-left: 5px;
            font-size: 14px;
            &-item {
                line-height: 50px;
            }
        }
    }
    &-right {
        padding-right: 10px;
        display: flex;
        flex-direction: row;
        &-full {
            padding: 0 10px;
            cursor: pointer;
            &:hover {
                background-color: #ebebeb;
            }
        }
        &-language {
            padding: 0 10px;
            cursor: pointer;
            &:hover {
                background-color: #ebebeb;
            }
        }
        &-notice {
            padding: 0 10px;
            cursor: pointer;
            &:hover {
                background-color: #ebebeb;
            }
        }
        &-set {
            padding: 0 10px;
            cursor: pointer;
            &:hover {
                background-color: #ebebeb;
            }
        }
        &-user {
            padding: 0 15px;
            cursor: pointer;
            font-size: 16px;
            &-ava {
                margin-top: -4px;
                margin-right: 5px;
            }
            &-name {
                cursor: pointer;
                padding: 0 5px;
            }
            &:hover {
                background-color: #ebebeb;
            }
        }
    }
}
.trigger {
    font-size: 18px;
}
</style>