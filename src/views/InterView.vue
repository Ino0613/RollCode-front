<template>
  <div class="interview">
    <el-container class="my-container">
      <el-header style="z-index: 999">
        <el-affix>
          <INavbar />
        </el-affix>
      </el-header>
      <div class="views">
        
        <el-row>
          <el-col :span="16" class="col-left" :gutter="10">
            <el-main>
              <InterviewTitle />
              
            </el-main>
          </el-col>
          
          <el-col :span="6" class="col-right" :gutter="10">
            <el-affix target=".my-container" :offset="80">
              <InterviewNote />
              <InterviewHots />
            </el-affix>
          </el-col>
        </el-row>
      </div>
    </el-container>
    <IFooter />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
const value = ref(new Date());
import IQuestionBooks from "@/components/QuestionsModel/IQuestionBooks.vue";
import JobAbilitiesTest from "@/components/HomeModel/JobAbilitiesTest.vue";
import PopularQuestions from "@/components/PopularQuestions.vue";
import Features from "@/components/HomeModel/Features.vue";
import INavbar from "@/components/GlobalModel/INavbar.vue";
import InterviewForum from "@/components/InterviewModel/InterviewForum.vue";
import InterviewNote from "@/components/InterviewModel/InterviewNote.vue";
import InterviewHots from "@/components/InterviewModel/InterviewHots.vue";

import ICalendar from "@/components/QuestionsModel/ICalendar.vue";
import InterviewTitle from "@/components/InterviewModel/InterviewTitle.vue";
import LatestInterviewQuestions from "@/components/HomeModel/LatestInterviewQuestions.vue";

interface DisabledDatesFunction {
  (date: Date): boolean;
}

export default {
  components: {
    IQuestionBooks,
    PopularQuestions,
    JobAbilitiesTest,
    Features,
    INavbar,
    InterviewForum,
    LatestInterviewQuestions,
    ICalendar,
    InterviewTitle,
    InterviewNote,
    InterviewHots,
  },
  data() {
    return {
      currentDate: new Date(),
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.interview {
  .my-container {
    height: auto;
    background-color: #f7f8f8;
  }

  .header-h1 {
    display: flex;
    margin-left: 15px;
    margin-top: 0;
  }

  .views {
    margin-top: 20px;
    margin-left: 130px;
  }

  .col-right {
    margin-left: 0;
  }

  .el-main {
    padding-top: 0px;
  }
}
</style>
