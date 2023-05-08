<template>
  <div class="views-container">
    <div class="contents">
      <div class="views-img1">
        <div class="first-f">求职面试</div>
        <img
          class="image1"
          src="https://tc.iyunmc.cn/LightPicture/2023/05/e2d7adfe0fbb4711.png"

        />
      </div>
      <div class="views-img2">
        <div>职场与内推</div>
        <img
          class="image2"
          src="https://tc.iyunmc.cn/LightPicture/2023/05/527213b4984a44ce.png"
        />
      </div>
      <div class="views-img3">
        <div>技术交流</div>
        <img
          class="image3"
          src="https://tc.iyunmc.cn/LightPicture/2023/05/7b6509d38d04eab0.png"

        />
      </div>
      <div class="viewss">
        <div class="views-img4">
          <div class="first-2">文章分享</div>
          <img
            class="image4"
            src="https://static.leetcode.cn/cn-mono-assets/production/assets/notes.0e1effb1.png"
          />
        </div>
        <div class="views-img5">
          <div class="first-3">意见反馈</div>
          <img
            class="image5"
            src="https://static.leetcode.cn/cn-mono-assets/production/assets/feedback.6ed8deff.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      imageSources: [
        "https://tc.iyunmc.cn/LightPicture/2023/05/7b6509d38d04eab0.png",
        "https://tc.iyunmc.cn/LightPicture/2023/05/527213b4984a44ce.png",
        "https://tc.iyunmc.cn/LightPicture/2023/05/e2d7adfe0fbb4711.png",
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.views-container {
  margin-top: 0px;
  margin-left: 1px;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;

  margin-bottom: 20px;

  .contents {
    display: flex;
  }
  .views-img1,
  .views-img2,
  .views-img3 {
    font-size: larger;
    background-color: #ffffff;
    text-align: left;
    padding: 18px 0px 0px 22px;
    border-radius: 10px;
    width: 183px;
    height: 100px;
    margin-right: 20px;
    margin-left: 0;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    img {
      position: relative;
      margin-left: 70px;
      margin-top: 7px;
      width: 92px;
      height: 68px;
    }
  }
  .views-img1 {
    background: linear-gradient(#47e2b1, #5edbb3);
  }

  .views-img4,
  .views-img5 {
    display: flex;
    align-items: center;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    text-align: left;
    width: 183px;
    background-color: #ffffff;
    height: 50px;
    border-radius: 10px;
    margin-bottom: 18px;
    .first-2,
    .first-3 {
      margin-left: 20px;
      display: flex;
    }
    img {
      margin-left: 30px;
      margin-top: 4px;
    }
    .image5{
        width: 44px;
    }
  }

  .views-img5{
    margin-bottom: 0px;
  }
  .first-f {
    color: #ffffff;
  }

  .image4,
  .image5 {
    display: flex;

    height: 36px;
    width: 33.7px;
  }
}
</style>
