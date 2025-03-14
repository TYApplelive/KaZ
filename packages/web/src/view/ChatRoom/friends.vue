<script setup lang="ts">
import { User } from "@vicons/carbon"
import { defineComponent } from 'vue'
defineComponent({
    components: {
        User
    }
})
</script>

<template>
    <div class="chatroom-friends">
        <n-thing>
            <template #header>
                <n-avatar round :size="48" src="https://img.picui.cn/free/2025/03/14/67d3fc90be1cc.jpg" />
            </template>
            <template #description>
                <span class="user_name">@TY-APPLELIVE</span>
            </template>
        </n-thing>
        <n-divider />
        <h1>好友列表</h1>
    </div>
</template>

<style lang="less" scoped>
@import "@/assets/common.less";

// 好友栏框
.chatroom-friends {
    margin: 10px 10px;

    .user_name {
        color: @color-cyberpunk-0;
    }
}

// 头像位置
:deep(.n-thing-header) {
    display: flex;
    justify-content: center !important;
}
</style>
