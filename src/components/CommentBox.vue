<template>
  <div class="post-comment-panel">
    <div class="comment-form">
      <el-form :model="formData" :rules="rules" ref="formDataRef">
        <!-- textarea输入 -->
        <el-form-item prop="content">
          <el-input
            clearable
            :placeholder="placeholderInfo"
            :maxlength="150"
            resize="none"
            show-word-limit
            v-model="formData.content"
            type="textarea"
          />
        </el-form-item>
      </el-form>
    </div>
    <div class="send-button" @click="postCommentDo">发表</div>
  </div>
</template>
<script setup>
import { ref, getCurrentInstance } from "vue";
import { comment } from "../utils/api.utils";
import { useMainStore } from "../stores/index";
const store = useMainStore();
const { proxy } = getCurrentInstance();
const props = defineProps({
  answerId: {
    type: Number,
  },
  placeholderInfo: {
    type: String,
    default: "评论字数不少于5个",
  },
});

// form信息
const checkPostComment = (rules, value, callback) => {
  if (value == null && formData.value.image == null) {
    callback(new Error(rules.message));
    return;
  }
  callback();
};

const formData = ref({});
const formDataRef = ref();
const rules = {
  content: [
    { required: true, message: "请输入内容", validator: checkPostComment },
    {
      min: 5,
      message: "评论最少五个字",
    },
  ],
};

const emit = defineEmits(["postCommentFinish"]);

// 发送评论
const postCommentDo = () => {
  if (!store.loginUserInfo) {
    proxy.Message.warning("请先登录");
    store.showLogin = 1;
    return;
  }
  formDataRef.value.validate(async (valid) => {
    if (!valid) {
      return;
    }
    let params = Object.assign({}, formData.value);
    params.answerId = props.answerId;
    let result = await proxy.Request({
      url: comment.createComment,
      params,
    });
    if (!result) return;
    proxy.Message.success("发表成功");
    formDataRef.value.resetFields();
    // emit("postCommentFinish", result.data);
  });
};
</script>
<style lang="scss">
.post-comment-panel {
  display: flex;
  padding: 10px;
  .comment-form {
    flex: 1;
    margin-right: 10px;
    .el-textarea__inner {
      height: 60px;
    }
    .insert-img {
      margin-top: 10px;
      line-height: normal;
      .iconfont {
        margin-top: 3px;
        font-size: 20px;
        color: #636262;
      }
      .pre-img {
        position: relative;
        .iconfont {
          cursor: pointer;
          position: absolute;
          top: -10px;
          right: -10px;
          color: #727272;
        }
      }
    }
  }
  .send-button {
    width: 60px;
    height: 60px;
    background: var(--mainColor);
    color: #fff;
    text-align: center;
    line-height: 60px;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>
