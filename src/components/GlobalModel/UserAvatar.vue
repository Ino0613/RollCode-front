<template>
  <div>
    <el-dropdown>
      <span
        class="user-avatar"
        :style="{ backgroundImage: `url(${user.avatar})` }"
      />
      <template #dropdown>
        <el-dropdown-menu slot="dropdown" style="z-index: 1000">
          <el-dropdown-item>{{ user.name }}</el-dropdown-item>
          <el-dropdown-item>个人资料</el-dropdown-item>
          <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ElForm, ElFormItem, ElInput, ElButton, ElMessage } from "element-plus";

const dialogLoginRegisterVisible = ref(false);

export default {
  computed: {
    user() {
      const store = useStore();
      return store.state.user;
    },
    userToken() {
      const store = useStore();
      return store.state.token;
    },
  },
  methods: {
    handleLogout() {
      axios
        .post("api/user/logout", {})
        .then((response: any) => {
          console.log(response.data.msg);
          if (response.data.code == 0) {
            ElMessage.error(response.data.data);
          }
          if (response.data.code == 20000) {
            dialogLoginRegisterVisible.value = false;
            localStorage.removeItem("token");
            window.location.reload(); // 刷新当前页面
            // router.push({ path: '/' }); // 使用Vue Router的push方法跳转到home页面
            ElMessage.success(response.data.data);
          }
          // 处理请求成功的逻辑
        })
        .catch((error: any) => {
          // 处理请求失败的逻辑
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.user-avatar {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
</style>
