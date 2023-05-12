<template>
  <div>
    <div class="tab-container">
      <div class="title-links">
        <el-tabs v-model="activeName" class="home-title-tabs">
          <el-tab-pane label="最新" name="first">
            <InterviewForum />
          </el-tab-pane>
          <el-tab-pane label="最热" name="second"> </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import InterviewForum from "@/components/InterviewModel/InterviewForum.vue";

import { ElSelect, ElOption, ElTabs, ElTabPane } from "element-plus";
const visible = ref(false);
const activeName = ref("first");

export default defineComponent({
  name: "SpecializedPractice",
  setup() {
    const blockItems = [
      {
        title: "基础算法",
        subItems: [
          { title: "哈希", status: { done: 0, total: 63 } },
          { title: "查找", status: { done: 0, total: 100 } },
          { title: "排序", status: { done: 0, total: 257 } },
          { title: "递归", status: { done: 0, total: 257 } },
        ],
      },
      {
        title: "编程语言",
        subItems: [
          { title: "Go", status: { done: 0, total: 60 } },
          { title: "C++", status: { done: 0, total: 100 } },
          { title: "Java", status: { done: 0, total: 257 } },
          { title: "JavaScript", status: { done: 0, total: 307 } },
          { title: "Python", status: { done: 0, total: 221 } },
          { title: "HTML", status: { done: 0, total: 252 } },
          { title: "CSS", status: { done: 0, total: 190 } },
          { title: "C语言", status: { done: 0, total: 224 } },
        ],
      },
      {
        title: "安全",
        subItems: [{ title: "加密和安全", status: { done: 0, total: 63 } }],
      },
      {
        title: "中间件",
        subItems: [
          { title: "Redis", status: { done: 0, total: 63 } },
          { title: "Kafka", status: { done: 0, total: 56 } },
          { title: "Hive", status: { done: 0, total: 54 } },
          { title: "ZooKeeper", status: { done: 0, total: 47 } },
        ],
      },
      {
        title: "编程语言",
        subItems: [
          { title: "Go", status: { done: 0, total: 60 } },
          { title: "C++", status: { done: 0, total: 100 } },
          { title: "Java", status: { done: 0, total: 257 } },
          { title: "JavaScript", status: { done: 0, total: 307 } },
          { title: "Python", status: { done: 0, total: 221 } },
          { title: "HTML", status: { done: 0, total: 252 } },
          { title: "CSS", status: { done: 0, total: 190 } },
          { title: "C语言", status: { done: 0, total: 224 } },
        ],
      },
      {
        title: "安全",
        subItems: [{ title: "加密和安全", status: { done: 0, total: 63 } }],
      },
      {
        title: "中间件",
        subItems: [
          { title: "Redis", status: { done: 0, total: 63 } },
          { title: "Kafka", status: { done: 0, total: 56 } },
          { title: "Hive", status: { done: 0, total: 54 } },
          { title: "ZooKeeper", status: { done: 0, total: 47 } },
        ],
      },
      {
        title: "编程语言",
        subItems: [
          { title: "Go", status: { done: 0, total: 60 } },
          { title: "C++", status: { done: 0, total: 100 } },
          { title: "Java", status: { done: 0, total: 257 } },
          { title: "JavaScript", status: { done: 0, total: 307 } },
          { title: "Python", status: { done: 0, total: 221 } },
          { title: "HTML", status: { done: 0, total: 252 } },
          { title: "CSS", status: { done: 0, total: 190 } },
          { title: "C语言", status: { done: 0, total: 224 } },
        ],
      },
      {
        title: "安全",
        subItems: [{ title: "加密和安全", status: { done: 0, total: 63 } }],
      },
      {
        title: "中间件",
        subItems: [
          { title: "Redis", status: { done: 0, total: 63 } },
          { title: "Kafka", status: { done: 0, total: 56 } },
          { title: "Hive", status: { done: 0, total: 54 } },
          { title: "ZooKeeper", status: { done: 0, total: 47 } },
        ],
      },
    ];
    return {
      blockItems,
    };
  },
  components: {
    ElSelect,
    ElOption,
    ElTabs,
    ElTabPane,
    InterviewForum,
  },
  data() {
    return {
      selectedType: "",
      activeTab: "array",
      doneArray: 0,
      totalArray: 196,
      doneString: 0,
      totalString: 72,
      doneLinkedList: 0,
      visible,
      activeName,
      totalLinkedList: 193,
      // 其他分类块的数据
    };
  },
  methods: {
    // 其他方法
    handleMouseOver() {
      this.visible = true;
    },
    goToExam(type: string) {
      this.$router.push({ name: "exam", params: { type: 1 } });
    },
  },
});
</script>

<style lang="less" scoped>
.tab-container {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
}

.tab-select {
  display: flex;

  .el-input__wrapper {
    align-self: start;
  }

  .el-select {
    width: 200px;
    display: flex;
    flex: 1;

    .el-scrollbar {
      width: 100%;
    }
  }
}

.title-links {
  display: flex;
}

.title-link-img {
  margin-top: 5px;
  margin-left: 60px;
  width: 30px;
  height: 60px;
}

.title-link {
  margin-top: 23px;
  display: inline-block;
  list-style: none;
  margin-right: 30px;
  padding: 0;
  color: #32ca99;
  scroll-margin-bottom: 100px;
  a {
    color: #484848;
    text-decoration: none;

    scroll-margin-bottom: 100px !important;
  }
}

li:first-child {
  color: #32ca99;
}
.tab-content {
  .content-item {
    margin-bottom: 20px;

    .h3-title {
      margin-top: 25px;
      margin-left: 5px;
      margin-bottom: 20px;
      display: flex;
    }

    .sub-items {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 20px;
      justify-content: space-between;

      .sub-item {
        display: flex;
        width: 150px;
        background-color: #f7f8f8;
        flex-direction: column;
        margin-bottom: 20px;
        align-items: flex-start;
        margin-right: 20px;
        padding: 20px;
        font-size: 13px;
        font-weight: bold;
        border-radius: 20px;
        transition: background-color 0.3s ease, box-shadow 0.3s ease,
          transform 0.3s ease;

        .sub-item:last-child {
          margin-right: 0px;
        }

        .sub-span {
          margin-top: 5px;
        }

        span {
          margin: 3px;
          margin-right: 0px;
        }

        #status {
          color: #32ca99;
        }

        span:last-child {
          color: #999;
        }
      }

      .sub-item:hover {
        background-color: #ffffff;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
        transform: translateY(-5px);
      }
    }
  }
}

.practice-tabs {
  margin-top: 20px;
}

.practice-block {
  margin: 20px 0;
}

.practice-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.practice-title {
  font-size: 18px;
  font-weight: bold;
}

.practice-content {
  /* 题目列表的样式 */
}

:deep(.el-tabs__nav-scroll) {
  background-color: transparent !important;
  height: 60px;
  border-radius: 10px;
}

.el-tabs__item {
  color: rgb(99, 99, 99);
  font-size: medium;
}
</style>
