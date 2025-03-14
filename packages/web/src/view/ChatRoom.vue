<script setup lang="ts"></script>

<template>
  <div class="ChatRoom">
    <v-container fluid height="100%" class="bg-surface-variant">
      <v-row no-gutters>
        <v-col cols="2"> 好友栏 </v-col>
        <v-col cols="10"> 聊天框 </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="less" scoped>
@import '../assets/common.less';

.ChatRoom {
  background-color: red;
  height: 100%;
  width: 100%;
}
</style>
