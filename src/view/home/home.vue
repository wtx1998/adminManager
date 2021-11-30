<template>
    <a-layout class="container">
        <left></left>
        <a-layout>
            <top calss="container-right-top"></top>
            <a-layout-content calss="container-right-main">Content</a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script setup>

import left from './cpms/left.vue';
import top from './cpms/top.vue';
import Main from './cpms/main.vue';
import { ref, watch } from 'vue';

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