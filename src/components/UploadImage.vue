<template>
  <div class="cover-upload">
    <el-upload
      name="file"
      :show-file-list="false"
      accept=".png,.PNG,.jpg,.JpG,.jpeg,.JPEG,gif,.GIF,.bmp,.BMP"
      :multiple="false"
      :http-request="uploadImage"
    >
      <div class="cover-upload-btn">
        <template v-if="localFile">
          <img :src="localFile" alt="" />
        </template>
        <template v-else>
          <!--  -->
          <span class="iconfont icon-add"></span>
        </template>
      </div>
    </el-upload>
  </div>
</template>
<script setup>
import { ref, reactive, getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();

const props = defineProps({
  modelValue: {
    type: Object,
    default: null,
  },
  imageUrlPrefix: {
    type: String,
  },
});

const emit = defineEmits();

const localPreview = ref(false);
const localFile = ref(null);
const uploadImage = async (file) => {
  file = file.file;
  let img = new FileReader();
  img.readAsDataURL(file);
  img.onload = ({ target }) => {
    localFile.value = target.result;
  };
  emit("update:modelValue", file);
};
</script>
<style lang="scss">
.cover-upload {
  .cover-upload-btn {
    display: flex;
    width: 150px;
    height: 150px;
    align-items: center;
    justify-content: center;
    background: #ececec;
    .iconfont {
      font-size: 50px;
      color: #ddd;
    }
    img {
      width: 100%;
    }
  }
}
</style>
