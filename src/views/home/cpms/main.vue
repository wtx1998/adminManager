<template>
    <!-- Tab -->
    <a-row type="flex" class="tabcontainer">
        <a-col flex="38px" class="icon">
            <LeftOutlined />
        </a-col>
        <a-col flex="auto">
            <template v-for="(item,index) in tabs" :key="index">
                <div
                    class="tabItem"
                    :class="{ activeClass: item.index == activeIndex }"
                    @mouseenter="enter(item)"
                    @mouseleave="leave(item)"
                    @click="itemActive(item)"
                >
                    <span>{{ item.label }}&nbsp;</span>
                    <transition name="slide">
                        <span v-if="(item.hover|| item.index == activeIndex)">
                            <close-outlined v-if="item.index != 0" />
                        </span>
                    </transition>
                </div>
            </template>
        </a-col>
        <a-col flex="38px" class="icon">
            <RightOutlined />
        </a-col>
    </a-row>

    <!-- Content -->
    <keep-alive >
    
    </keep-alive>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { LeftOutlined, RightOutlined, CloseOutlined } from '@ant-design/icons-vue';
import tab from '../../../mock/index.js';

const activeKey = ref([])

const tabs = reactive(tab)
const activeIndex = ref(0)
const activeItem=ref({})
const enter = (item) => {
    item.hover = true
}
const leave = (item) => {
    item.hover = false
}
const itemActive = item => {
    activeIndex.value = item.index
    activeItem.value=item
    console.log(activeItem);
    console.log(item.url);
}
</script>

<style lang="scss" scoped>
.tabcontainer {
    height: 35px;
    line-height: 35px;
}
.tabItem {
    display: inline-flex;
    padding: 0 10px;
    border-radius: 2px;
    background: #fff;
    height: 35px;
    line-height: 35px;
    font-size: 14px;
    margin: 2px 2px 0 2px;
    &:hover {
        color: #1890ff;
        cursor: pointer;
        transition: width 2s;
    }
}
.activeClass {
    color: #1890ff;
}
.icon {
    background: #fff;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.slide-enter-active {
    transition: all 0.1s linear;
}
.slide-leave-active {
    transition: all 0.1s linear;
}
.slide-enter {
    transform: translateX(-90%);
    opacity: 0;
}
.slide-leave-to {
    transform: translateX(110%);
    opacity: 0;
}
</style>