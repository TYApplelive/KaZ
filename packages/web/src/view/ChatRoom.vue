<script setup lang="ts">
import chatroom_friends from './ChatRoom/friends.vue';
import chatroom_chat from './ChatRoom/chat.vue';

</script>

<template>
  <n-flex class="ChatRoom" justify="center" align="center" :wrap="false">
    <n-flex class="room" justify="start">
      <!-- 好友栏 -->
      <chatroom_friends />
      <!-- 聊天室 -->
      <chatroom_chat />
    </n-flex>
  </n-flex>
</template>

<style lang="less" scoped>
@import '../assets/common.less';

.ChatRoom {
  height: 100%;
  width: 100%;
}

.room {
  height: 800px;
  width: 1200px;
  background-color: grey;
  border-radius: 20px;
  overflow: hidden;
}
</style>
