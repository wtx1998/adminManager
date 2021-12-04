<template>
    <a-layout class="container">
        <left></left>
        <a-layout>
            <top calss="container-right-top"></top>
            <a-layout-content calss="container-right-main">
                <Main />
                <!-- <router-view v-slot="props">
                    <transition>
                        <keep-alive>
                            <component :is="props.Component"></component>
                        </keep-alive>
                    </transition>
                </router-view>-->
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script setup>

import left from './cpms/left.vue';
import top from './cpms/top.vue';
import Main from './cpms/main.vue';
// 绑定对应的store

</script>

<style lang="scss" scoped>
.container {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
}
</style>