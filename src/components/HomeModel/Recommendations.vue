<template>
  <div class="recommendations">
    <div class="content">
      <div class="content-css">
        <ul>
          <li v-for="link in links" :key="link.id">
            <div class="link-items">
              <div class="link-header">
                <img :src="link.user_icon" target="_blank" />
                <a
                  :href="link.url"
                  target="_blank"
                  @click.prevent="showLinkDialog(link.id)"
                  >{{ link.title }}</a
                >
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
          </li>
          <li v-if="links.length===0">暂无数据</li>
        </ul>
      </div>
      <el-dialog
        v-model="dialogVisibleInfo"
        :title="selectedLink.user_nickname"
        :width="dialogWidth"
        :before-close="handleDialogClose"
      >
        <div class="dialog-header">
          <div class="avatar">
            <img :src="selectedLink.user_avatar" />
          </div>
          <div class="info">
            <div class="nickname">{{ selectedLink.user_nickname }}</div>
            <div class="time">{{ selectedLink.time }}</div>
          </div>
          <div class="follow">
            <el-button
              type="primary"
              icon="el-icon-star-off"
              @click="handleFollow"
            >
              关注
            </el-button>
          </div>
        </div>
        <div class="dialog-content">
          <div class="title">{{ selectedLink.title }}</div>
          <div class="content">{{ selectedLink.content }}</div>
        </div>
        <div class="dialog-footer">
          <div class="actions">
            <div class="action">
              <el-button type="text" icon="el-icon-star-off">
                {{ selectedLink.likes }} 点赞
              </el-button>
            </div>
            <div class="action">
              <el-button type="text" icon="el-icon-star-on">
                {{ selectedLink.favorites }} 收藏
              </el-button>
            </div>
            <div class="action">
              <el-button type="text" icon="el-icon-chat-dot-round">
                {{ selectedLink.comments }} 评论
              </el-button>
            </div>
          </div>
          <div class="reply">
            <el-input v-model="replyText" placeholder="回复帖子"></el-input>
            <el-button type="primary" @click="handleReply">回复</el-button>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";

const activeName = ref("first");
const title = ref("");
const replyText = ref("");
const dialogVisible = ref(false);
const dialogVisibleInfo = ref(false);
const dialogWidth = "50%";


const handleFollow = () => {
  // Handle follow
};

const handleReply = () => {
  // Handle reply
};

const showLinkDialog = (id: any) => {

  dialogVisibleInfo.value = true;
}
const selectedLink = ref({
  user_nickname: "John",
  user_avatar: "https://q2.qlogo.cn/headimg_dl?dst_uin=1252343981&spec=140",
  time: "2023-05-11",
  title: "My Link",
  content: "This is my link content",
  likes: 10,
  favorites: 5,
  comments: 3,
});
interface Links {
  id: string;
  userId: string;
  user_icon: string;
  title: string;
  url: string;
  labels: string;
  comments: number;
  content: string;
  likes: number;
  views: number;
  createTime: string;
  updateTime: string;
}
let links= [] as Links[]

// const fetchRecommendations = async () => {
//   try {
//     const response = await axios.get("/api/post");
//     // title.value = response.data.title;
//     // links.value = response.data.links;
//     links = response.data
//   } catch (error) {
//     // console.error(error);
//   }
// };

function getAllPost() {
  axios
    .get("api/post")
    .then((response) => {
      const data = response.data.data;
      data.forEach((post: any) => {
        links.push({
          id: post.id,
          userId: post.userId,
          user_icon: post.userIcon,
          title: post.title,
          url: post.url,
          labels: post.labels.split(","),
          likes: post.likes,
          comments: post.comments,
          content: post.content,
          createTime: post.createTime,
          updateTime: post.updateTime,
          views: post.views,
        });

      });
      console.log(links);
      console.log(links.length);
      
        
    })
    .catch((error) => {
      console.error(error);
    });
}
const handleDialogClose = () => {
  dialogVisibleInfo.value = false;
};
// const refreshData = () => {
//   fetchRecommendations();
// };

onMounted(() => {
  getAllPost();
});
</script>

<style lang="less" scoped>
/* Recommendations 样式 */
.recommendations {
  border-radius: 25px;

  .recommendations-header {
    display: flex;
    height: 60px;
    margin-left: 10px;
    align-items: center;
    border-bottom: #f8f8f8 solid 1px;
    box-sizing: border-box;

    .r-btn-parent {
      display: flex;
      justify-content: center;
      /* 可选：水平居中 */
      align-items: center;
      /* 可选：垂直居中 */
      margin-right: 20px;

      .my-button {
        width: 120px;
        height: 30px;
        font-size: 20px;
        border-radius: 20px;
        margin-left: 10px;
        color: #474747;
      }
      .my-button:hover {
        --el-link-hover-text-color: none !important;
        transition: color 0.3s;
        color: #44c89e;
      }
    }
  }

  .recommendations-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }

  .content {
    margin-top: 20px;

    h3 {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 10px;
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
}

.link-items {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  overflow: hidden;
  /* 隐藏溢出部分 */
  justify-content: space-between;
  margin-bottom: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);

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

.link-body {
  text-align: left;
  margin-left: 18px;

  .link-body-box {
    display: flex;
    margin-right: 10px;
    flex-direction: column;

    .link-box-label {
      display: inline-flex !important;
      justify-content: flex-start !important;
      align-items: center !important;
      border-radius: 13px;
      font-weight: 400;
      font-size: 13px;
      line-height: 20px;
      background-color: rgba(0, 10, 32, 0.05);
      color: #8e8e8e;
      padding: 3px 10px;
      margin-bottom: 10px;
    }

    .link-box-content {
      font-size: 14px;
      color: #666;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 10px;
      flex: 1;
    }
  }

  .link-body-item {
    display: flex !important; // 设置为行内块级元素

    /* 左右两边各留出10像素的间距 */

    > * {
      margin: 10px;
    }
  }
}

.views-count,
.comments-count,
.likes-count {
  margin: 5px;
  font-size: 14px;
  color: #999;
}
</style>
