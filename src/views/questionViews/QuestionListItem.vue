<template>
  <!-- 卡片 -->
  <div class="faq-list-item">
    <!-- 回答与阅读统计面板 -->
    <div class="num-tips-container">
      <div
        :class="[
          'read-num',
          data.isSolve ? 'issolve' : '',
          data.answerCount ? 'answered' : '',
        ]"
      >
        <span class="">{{ data.answerCount }}</span>
        <span class="">{{ data.isSolve ? "解决" : "回答" }}</span>
      </div>
      <div class="read-num">
        <span>{{ data.viewCount }}</span
        ><span>阅读</span>
      </div>
    </div>
    <div class="question-item">
      <div class="title">
        <RouterLink :to="`/faqDetail/${data.questionId}`" class="a-link">
          {{ data.title }}
        </RouterLink>
      </div>
      <div class="userInfo">
        <div class="author">
          <RouterLink class="a-link" :to="`/user/${data.user.userId}`">
            {{ data.user.nickName }}
          </RouterLink>

          <el-divider direction="vertical"></el-divider>
          {{ proxy.TransformIsoDate(data.createTime) }}
        </div>
        <span class="board">
          <RouterLink class="a-link" :to="`/faq/${data.board.boardId}`">
            {{ data.board.boardName }}
          </RouterLink>
        </span>

       
      </div>
    </div>
  </div>
</template>
<script setup>
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();

const props = defineProps({
  data: {
    type: Object,
  },
  htmlTitle: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="scss">
.faq-list-item {
  display: flex;
  padding: 0.8em;
  background-color: #ffffff;
  border-top: 1px var(--el-border-color) var(--el-border-style);
  .num-tips-container {
    display: flex;
    align-items: center;

    margin-right: 15px;
    .read-num {
      display: flex;
      text-align: center;
      padding: 8px;
    }
    .answered {
      border: 1.8px var(--mainColor) solid;
      border-radius: 10%;
    }
    .issolve {
      color: #fff;
      background-color: var(--mainColor);
    }
  }

  .question-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

    //   margin-left: 10px;
    .title {
    }
    .userInfo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .author {
      }
      .board {
        background-color: #e9ecef;
        border-radius: 5px;
        padding: 5px;
        cursor: pointer;
      }
    }
  }
}
</style>
