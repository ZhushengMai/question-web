<!-- 头像 -->
<template>
  <el-avatar :size="width" :src="avatarUrl" />
</template>
<script setup>
const props = defineProps({
  width: {
    type: Number,
    default: 40,
  },
  avatarUrl: {
    type: String,
    default:
      "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
  },
});
</script>
<style></style>
