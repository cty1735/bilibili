<template>
  <div class="detail">
    <img :src="selectItem.img" style="width: 100%; height: 27.778vw;" />
    <div class="text">
      <div>
        <van-icon name="play-circle" />
        <span>1233</span>
      </div>
      <div>
        <van-icon name="comment-o" />
        <span>{{selectItem.commentlen}}</span>
      </div>
    </div>

    <p>{{selectItem.name}}</p>
  </div>
</template>

<script>
export default {
  props: ["selectItem"]
};
</script>

<style lang='less'>
.detail {
  position: relative;
  .text {
    width: 100%;
    box-sizing: border-box;
    padding: 0 15px;
    top: 84px;
    left: 0;
    position: absolute;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), transparent);
    color: white;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
  }
  p {
    font-size: 3.333vw;
    padding: 0.833vw 0;
    text-align: center;
  }
}
</style>
