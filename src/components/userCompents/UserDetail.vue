<template>
  <div>
    <div class="user-detail">
      <div class="left">
        <img :src="userInfo.user_img" alt />
      </div>
      <div class="right">
        <div class="right-top">
          <span>
            <h1>0</h1>
            <p>粉丝</p>
          </span>
          <span>
            <h1>42</h1>
            <p>关注</p>
          </span>
          <span>
            <h1>0</h1>
            <p>获赞</p>
          </span>
        </div>
        <div @click="$router.push('/edit')">
          <div class="right-content">编辑资料</div>
        </div>
        
      </div>
    </div>
    <div class="user-data">
      <h2>{{userInfo.name}}</h2>
      <div v-if='userInfo.user_desc'>{{userInfo.user_desc}}</div>
      <div v-else>这个人很神秘，什么都没有写</div>
    </div>
  </div>
</template>

<script>
export default {
  props:['userInfo']
};
</script>

<style lang='less'>
.user-detail {
  height: 32.111vw;
  background-color: white;
  padding: 0vw 3.333vw;
  .left {
    float: left;
    margin-right: 3px;
    img {
      width: 23.611vw;
      height: 23.611vw;
      border-radius: 11.806vw;
    }
  }
  .right {
    float: left;
    width: 68.222vw;
    .right-top {
      display: flex;
      height: 18.056vw;
      justify-content: center;
      align-items: center;
      span {
        flex: 1;
        font-size: 4.444vw;
        text-align: center;
        p {
          color: #b1b1b1;
          font-size: 3.889vw;
          margin-top: 1.389vw;
        }
      }
    }
    .right-content {
      text-align: center;
      font-size: 5vw;
      color: #f29caf;
      height: 8.889vw;
      line-height: 8.889vw;
      border-radius: 1.389vw;
      border: 0.278vw solid #e1c4cb;
    }
  }
}
.user-data {
  padding: 0px 10px;
  h2 {
    height: 35px;
    font-size: 20px;
    font-weight: 400;
  }
  div {
    color: #b1b1b1;
    font-size: 3.889vw;
  }
}
</style>