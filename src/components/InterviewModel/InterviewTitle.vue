<template>
  <div class="home-title">
    <div class="home-title-header">
      <el-tabs v-model="activeName" class="home-title-tabs">
        <el-tab-pane label="面试经验" name="first">
            <InterviewImg/>
          <InterviewTab />
          
        </el-tab-pane>
        <el-tab-pane label="面试技巧" name="second"> </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";
import InterviewImg from "@/components/InterviewModel/InterviewImg.vue";

import InterviewTab from "@/components/InterviewModel/InterviewTab.vue";
const activeName = ref("first");
</script>

<style lang="less" scoped>
.home-title-tabs {
  ::v-deep.el-tabs__item {
    color: rgb(99, 99, 99);
    font-size: medium;
  }
  ::v-deep.el-tabs__nav-scroll {
    background-color: #ffffff;
    height: 60px;
    border-radius: 10px;
  }
}

.home-title-header {
  margin-left: 14px;
}
</style>
