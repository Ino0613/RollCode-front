<template>
  <div class="post-container">
    <PostNavbar />
    <div class="post-header"></div>
    <div class="post-body">
      <div class="form-title">
        <el-input
          v-model="title"
          maxlength="20"
          placeholder="标题必填，最多20字"
          show-word-limit
          type="text"
        />
      </div>
      <el-divider />
      <div class="form-content">
        <el-input
          v-model="content"
          autosize
          type="textarea"
          placeholder="请输入帖子内容"
        />
      </div>

      <div class="form-tools">
        <div></div>
      </div>
      <div>
        <button class="submit-button" @click="submitPost">提交</button>
      </div>
    </div>
    <PostFooter />
  </div>
</template>
<script lang="ts">
import PostNavbar from "./PostNavbar.vue";
import { PostAdd } from "@/types";
import { createPost } from "@/utils/utils";

import PostFooter from "./PostFooter.vue";
import { ref } from "vue";
// const text = ref("");
// const textarea = ref("");
const title = ref("");
const content = ref("");

export default {
  data() {
    return {
      image: null,
      emoji: "",
      title,
      content,
      theme: "",
    };
  },
  methods: {
    handleImageUpload(event: any) {
      // this.image = event.target.files[0];
    },
    submitPost() {
      const post: PostAdd = {
        title: title.value,
        content: content.value,
      };
      createPost(post)
        .then((res) => {
          console.log(res.data);
          // 处理成功响应
        })
        .catch((err) => {
          console.error(err);
          // 处理失败响应
        });
    },
  },
  components: { PostNavbar, PostFooter },
};
</script>

<style lang="less" scoped>
.post-container {
  background-color: #f7f8f8;
  height: 100vh;
}
.post-header {
  text-align: center;
  margin-bottom: 40px;
}

.post-header h2 {
  font-size: 24px;
  color: #333;
}

.post-body {
  width: 800px;
  height: 450px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: block;
  align-items: center;
  margin: 0 auto;
  padding: 40px;
}

.form-content {
  height: 90px;
}
.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 16px;
  margin-bottom: 10px;
  color: #333;
}

.form-group input[type="text"],
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: #333;
  box-sizing: border-box;
}

.form-group select option {
  font-size: 16px;
}

.form-group input[type="file"] {
  display: none;
}

.form-group .file-upload {
  display: inline-block;
  background-color: #4caf50;
  color: #fff;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.form-group .file-upload:hover {
  background-color: #3e8e41;
}
:deep(.el-textarea__inner) {
  height: 280px !important;
}
.submit-button {
  display: block;
  margin: 0 auto;
  background-color: #4caf50;
  color: #fff;
  margin-top: 250px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button:hover {
  background-color: #3e8e41;
}
</style>
