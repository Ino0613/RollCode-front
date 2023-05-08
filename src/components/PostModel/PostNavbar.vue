<template>
    <el-header class="navbar">
      <div class="row-div">
        <el-row justify="center" type="flex">
          <!-- 左侧标题 -->
          <el-col :span="4">
            <el-page-header  title="返回页面" @click="handleConfirmDialogConfirm">
            </el-page-header>
          </el-col>
          <!-- 中间占位符 -->
          <el-col :span="4" class="text-center"></el-col>
          <!-- 右侧交卷按钮和计时器组件 -->
          <el-col :span="4"></el-col>
          <el-col :span="3" class="text-right">
            <UserAvatar/>
          </el-col>
        </el-row>
      </div>
      
    </el-header>
  </template>
  <script lang="ts">
  import { ArrowLeft } from "@element-plus/icons-vue";
  import { ComponentOptions } from "vue";
  import UserAvatar from "../GlobalModel/UserAvatar.vue";
  
  export default {
    data() {
      return {
        startTime: new Date().getTime(),
        elapsedTime: 0,
        confirmDialogVisible: false,
      }
    },
    mounted() {
      setInterval(() => {
        this.elapsedTime = new Date().getTime() - this.startTime;
      }, 1000);
    },
    computed: {
      formattedTime() {
        const elapsedSeconds = Math.floor(this.elapsedTime / 1000);
        const hours = Math.floor(elapsedSeconds / 3600);
        const minutes = Math.floor((elapsedSeconds % 3600) / 60);
        const seconds = elapsedSeconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      }
    },
    methods: {
  
      handleConfirmDialogConfirm() {
        // 点击确定按钮后执行的操作

        this.$router.push('/interview'); // 返回到某路由
      },
      handleConfirmDialogClose(done: () => void) {
        // 关闭确认框前的操作
        done(); // 关闭确认框
      },
      submitExam() {
        // 提交交卷操作
      }
    }
  } as ComponentOptions<{
    startTime: number;
    elapsedTime: number;
    formattedTime(): string;
    submitExam(): void;
  }>;
  </script>
  
  <style lang="less" scoped>
  .navbar {
    padding-top: 14px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  
  .text-center {
    text-align: center;
  }
  
  .text-right {
    margin-left: 10px;
    display: flex;
    text-align: right;
  
  }
  ::v-deep.el-dialog{
    width: 500px!important;
    border-radius: 10px;
    align-items: center;
    margin-top: 240px;
    .dialog-footer{
      margin-top: 20px;
    }
    .el-icon{
      color: #ff0000;
    
        size: 20px;
    }
  }
  #span-1{
    font-size: 16px;
    padding-top: 4px;
    margin: 8px;
    margin-bottom: 20px;
  }
  .text-large {
    font-size: 20px;
  }
  
  .font-600 {
    font-weight: 600;
  }
  /* 垂直居中样式 */
  
  .text-time{
    margin-top: 8px;
    margin-left: 20px;
  }
  ::v-deep.el-statistic__content{
    display: flex;
    align-items: center;
    margin-top: 4px;
    margin-left: 100px;
  }
  
  .el-button--primary{
    border-color: #32ca99;
    background: transparent;
    padding-left: 30px;
    border-radius: 30px;
    padding-right: 30px;
    color: #32ca99;
  }
  .el-button--primary:hover{
    border-color: #32ca99;
    background: #2db88c;
  }
  
  .el-page-header{
    padding-top: 3px;
  
  }
  ::v-deep.el-page-header__title{
    font-size: 16px;
    font-weight: bold;
  }
  
  ::v-deep.el-page-header:hover{
    color: #32ca99;
  }
  </style> 
  