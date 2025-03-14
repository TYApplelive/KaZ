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
        <n-thing class="chatroom-friends-header">
            <template #header>
                <n-avatar round :size="48" src="https://img.picui.cn/free/2025/03/14/67d3fc90be1cc.jpg" />
            </template>
            <template #description>
                <span class="user_name">@TY-APPLELIVE</span>
            </template>
        </n-thing>
        <n-divider />
        <n-list class="GroupsAndFriendsList" hoverable clickable>
            <n-list-item class="GroupsAndFriends" v-for="i in 10" :key="i">
                <n-thing>
                    <template #header>
                        <n-avatar round size="large" src="https://www.loliapi.com/acg/pp/" />
                    </template>
                </n-thing>
            </n-list-item>
        </n-list>
    </div>
</template>

<style lang="less" scoped>
@import "@/assets/common.less";

// 群组栏框
.chatroom-friends {
    margin: 10px 10px;
    display: flex;
    flex-direction: column;
    height: 780px;

    // TODO scroll样式

    // 用户名
    .user_name {
        color: @color-cyberpunk-0;
    }

    // 群组和好友列表
    .GroupsAndFriendsList {
        --n-color: transparent !important;
        --n-border-color: transparent !important;
        overflow-y: scroll;
        flex: 1;

        // 群组和好友
        .GroupsAndFriends {
            color: @color-cyberpunk-4;
            background: transparent;
        }
    }

}

// 头像位置
.chatroom-friends-header {
    :deep(.n-thing-header) {
        display: flex;
        justify-content: center !important;
    }
}
</style>
