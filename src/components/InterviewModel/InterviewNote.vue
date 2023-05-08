<template>
  <div class="inter-note">
    <div class="note-header">
      <img src="@/assets/note.png" class="note-box-icon" />
      <h2 class="title">写精贴</h2>
    </div>
    <div class="note-body">
      <div class="item-module">
        <div class="item-left" @click="handlelinkTo">
          <div>
            <img src="@/assets/interview-3.png" alt="发动态" />
          </div>
          <div>发动态</div>
        </div>
        <div class="item-right">
          <div>
            <img src="@/assets/interview-4.png" alt="写笔记" />
          </div>
          <div>写笔记</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ComponentOptions } from "vue";
export default {
  name: "JobnoteTest",
  methods: {
    handlelinkTo() {
      // 点击确定按钮后执行的操作

      this.$router.push("/postadd"); // 返回到某路由
    },
  },
  data() {
    return {
      note: [
        {
          label: "JAVA",
          icon: "https://static.nowcoder.com/fe/file/oss/1670224506225AUBYN.png",
          href: "https://www.nowcoder.com/interview/center?anchor=companyExp&jumpFrom=%E6%9C%AA%E7%99%BB%E5%BD%95%E9%A6%96%E9%A1%B5",
          target: "_blank",
        },
      ],
    };
  },
} as ComponentOptions<{
  startTime: number;
  elapsedTime: number;
  formattedTime(): string;
  submitExam(): void;
}>;
</script>

<style lang="less" scoped>
/* JobnoteTest 样式 */
.inter-note {
  border: 1px solid #fcfcfc;
  border-radius: 20px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  padding: 16px;
  padding-top: 5px;
  width: 78%;
}

.note-header {
  align-items: center;
  display: flex;
  margin-bottom: 2px;
  font-size: 11px;
}

.note-box-icon {
  height: 30px;
  width: 30px;
  margin-right: 5px;
}
.item-module {
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 30px;
  img {
    width: 40px;
    margin: 50px;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .item-left,
  .item-right {
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease,
      transform 0.3s ease;
  }
  .item-left:hover,
  .item-right:hover {
    transform: translateY(-5px);
  }
}
.note-body {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
