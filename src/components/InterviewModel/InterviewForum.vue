<template>
  <div class="interviewforum">
    <div class="forum-content">
      <div class="content-css">
        <ul>
          <li v-for="link in links" :key="link.id">
            <div class="link-items">
              <div class="link-header">
                <img :src="link.user_icon" target="_blank" />
                <a :href="link.url" target="_blank">{{ link.title }}</a>
                <span></span>
              </div>
              <div class="link-body">
                <!-- 论坛标题下行 -->
                <div class="link-body-box">
                  <div>
                    <!-- 论坛标签 -->
                    <div class="link-box-label">{{ link.labels }}</div>
                    <!-- 论坛内容 -->
                    <div class="link-box-content">{{ link.content }}</div>
                  </div>
                </div>

                <!-- 论坛内容下行item -->
                <div class="link-body-item">
                  <div class="link-item-views">
                    <el-icon content="浏览量">
                      <View />
                    </el-icon>
                    <span class="views-count">{{ link.views }}</span>
                  </div>
                  <div class="link-item-comments">
                    <el-icon content="评论数">
                      <ChatRound />
                    </el-icon>
                    <span class="comments-count">{{ link.comments }}</span>
                  </div>
                  <div class="link-item-likes">
                    <el-icon content="点赞数">
                      <Star />
                    </el-icon>
                    <span class="likes-count">{{ link.likes }}</span>
                  </div>
                </div>
              </div>
            </div>
            <el-divider />

          </li>
          <li v-if="!links.length">暂无数据</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";

const activeName = ref("first");
const title = ref("");

const links = ref([
  {
    id: 1,
    user_icon: "https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png",
    title: "如何在「求职面试」中发布一篇帖子？",
    url: "http://example.com/1",
    labels: "笔试",
    likes: 10,
    comments: 30,
    content:
      "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900",
    time: "",
    views: "30",
  },
  {
    id: 2,
    user_icon: "https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png",
    title: "请问除了大厂外企还有哪些厂考算法？",
    url: "http://example.com/2",
    labels: "面试",
    likes: 20,
    comments: 30,
    content:
      "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900",
    time: "",
    views: "30",
  },
  {
    id: 3,
    user_icon: "https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png",
    title: "什么是Java中的Lambda表达式？如何使用它简化代码？",
    url: "http://example.com/3",
    labels: "面试",
    likes: 30,
    comments: 30,
    content:
      "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900",
    time: "",
    views: "30",
  },
  {
    id: 3,
    user_icon: "https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png",
    title: "如何在Java中使用正则表达式进行字符串匹配？",
    url: "http://example.com/3",
    labels: "笔试",
    likes: 30,
    comments: 30,
    content:
      "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900",
    time: "",
    views: "30",
  },
  {
    id: 3,
    user_icon: "https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png",
    title: "Java中的泛型是什么？如何使用它来提高代码的复用性？",
    url: "http://example.com/3",
    labels: "面试",
    likes: 30,
    comments: 30,
    content:
      "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900",
    time: "",
    views: "30",
  },
  {
    id: 3,
    user_icon: "https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png",
    title: "如何在Java中使用注解来标记和描述程序元素？",
    url: "http://example.com/3",
    labels: "JAVA",
    likes: 30,
    comments: 30,
    content:
      "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900",
    time: "",
    views: "30",
  },
  {
    id: 3,
    user_icon: "https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png",
    title: "Java中的面向对象编程是什么？如何使用它来编写可维护的代码？",
    url: "http://example.com/3",
    labels: "JAVA",
    likes: 30,
    comments: 30,
    content:
      "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900",
    time: "",
    views: "30",
  },
  {
    id: 3,
    user_icon: "https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png",
    title: "如何在Java中使用线程池来提高程序的并发性能？",
    url: "http://example.com/3",
    labels: "面试",
    likes: 30,
    comments: 30,
    content:
      "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900",
    time: "",
    views: "30",
  },
  {
    id: 3,
    user_icon: "https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png",
    title: "Java中的网络编程是什么？如何使用它来构建网络应用程序？",
    url: "http://example.com/3",
    labels: "",
    likes: 30,
    comments: 30,
    content:
      "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900",
    time: "",
    views: "30",
  },
  {
    id: 3,
    user_icon: "https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png",
    title: "如何在Java中使用JDBC来访问关系型数据库？",
    url: "http://example.com/3",
    labels: "面试",
    likes: 30,
    comments: 30,
    content:
      "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900",
    time: "",
    views: "30",
  },
  {
    id: 3,
    user_icon: "https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png",
    title: "请问一下，二本院校有参加华为od笔试的资格吗？",
    url: "http://example.com/3",
    labels: "面试",
    likes: 30,
    comments: 30,
    content:
      "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900",
    time: "",
    views: "30",
  },
  {
    id: 3,
    user_icon: "https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png",
    title: "请问一下，二本院校有参加华为od笔试的资格吗？",
    url: "http://example.com/3",
    labels: "面试",
    likes: 30,
    comments: 30,
    content:
      "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900",
    time: "",
    views: "30",
  },
  {
    id: 3,
    user_icon: "https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png",
    title: "请问一下，二本院校有参加华为od笔试的资格吗？",
    url: "http://example.com/3",
    labels: "面试",
    likes: 30,
    comments: 30,
    content:
      "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900",
    time: "",
    views: "30",
  },
  {
    id: 3,
    user_icon: "https://tc.iyunmc.cn/LightPicture/2023/05/c8e42232a80aa005.png",
    title: "请问一下，二本院校有参加华为od笔试的资格吗？",
    url: "http://example.com/3",
    labels: "面试",
    likes: 30,
    comments: 30,
    content:
      "从今年开始，经过为期四个月的时间，终于从1750上分到了2000，其中在1900分段感觉呆了一个世纪，要不是上周第三题最短路给搞了出来，估计还在1900",
    time: "",
    views: "30",
  },
]);

const fetchinterviewforum = async () => {
  try {
    const response = await axios.get("/api/interviewforum");
    title.value = response.data.title;
    links.value = response.data.links;
  } catch (error) {
    console.error(error);
  }
};

const refreshData = () => {
  fetchinterviewforum();
};

onMounted(() => {
  fetchinterviewforum();
});
</script>

<style lang="less" scoped>
/* interviewforum 样式 */
.interviewforum{
  .content-css {

    h3 {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        font-size: 14px;

        .link-items {
          a {

            color: #333;
            text-decoration: none;
            cursor: pointer;
            transition: color 0.3s;

            &:hover {
              color: #47e2b1;
            }
          }


        }
      }
    }
  }

  .link-items {
    display: flex;
    padding: 10px;
    padding-top: 0px;

    flex-wrap: wrap;
    align-items: center;
    overflow: hidden;
    /* 隐藏溢出部分 */
    justify-content: space-between;
    margin-bottom: 20px;
  
    .link-header {
      display: flex;
      align-items: left;
      margin-bottom: 10px;
  
      a {
        margin-top: 17px;
        margin-left: 17px;
        font-size: 16px;
        font-weight: bold;
        color: #333;
        margin-left: 10px;
      }
  
      img {
        width: 20px;
        height: 20px;
        border-radius: 10px;
        margin-top: 18px;
        margin-left: 18px;
  
      }
  
      span {
  
        height: 2px; // 修改分割线的高度
        background-color: #dcdfe6;
        margin-left: 10px;
      }
    }
  }
  
}
</style>
