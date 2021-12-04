<template>
    <div class="tabcontainer">
        <template v-for="(item,index) in tabs" :key="index">
            <div>{{ item }}</div>
        </template>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const activeKey = ref([])
const tabs = reactive(["首页", "系统设置", "基础设置", "表单设置"])
</script>

<style lang="scss" scoped>
.tabcontainer {
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    flex-direction: row;
}
</style>