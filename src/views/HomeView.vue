<template>
  <div class="home">
    <!-- <IHome /> -->
    <el-container class="my-container">
      <el-header style="z-index: 999">
        <el-affix>
          <INavbar />
        </el-affix>
      </el-header>
      <div class="home-container">
        <el-row>
          <el-row justify="center">
            <el-col :span="20">
              <el-main>
                <IBanner />
              </el-main>
            </el-col>
            <el-col :span="14">
              <el-main>
                <HomeTitle />
              </el-main>
            </el-col>
            <el-col :span="5" class="col-right" style="z-index: 1">
              <Features />
              <el-affix target=".my-container" :offset="50">
                <JobAbilitiesTest />
                <LatestInterviewQuestions />
              </el-affix>
            </el-col>
          </el-row>
        </el-row>
      </div>
    </el-container>
    <IFooter />
  </div>
</template>
<script lang="ts">
import IBanner from "@/components/HomeModel/IBanner.vue";
import JobAbilitiesTest from "@/components/HomeModel/JobAbilitiesTest.vue";
import PopularQuestions from "@/components/PopularQuestions.vue";
import Features from "@/components/HomeModel/Features.vue";
import LatestInterviewQuestions from "@/components/HomeModel/LatestInterviewQuestions.vue"
import HomeTitle from "@/components/HomeModel/HomeTitle.vue";

export default {
  components: {
    IBanner,
    PopularQuestions,
    JobAbilitiesTest,

    LatestInterviewQuestions,
    Features,
    HomeTitle,
  },
  mounted() {
    //派发actions，获取floor组件的数据
    // store.dispatch('getFloorList')
    // //获取用户信息在首页展示
    // store.dispatch('getUserInfo')
  },
};
</script>

<style lang="less" scoped>

.el-row {
  width: 100% !important;
}

.el-main {
  --el-main-padding: 0px !important;
  margin: 0 30px;
  justify-content: center;
}

.my-container {
  height: auto;
  background-color: #f7f8f8;
  margin-bottom: 40px;
}

</style>
