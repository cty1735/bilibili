<template>
  <div>
    <div class="nav-top">
      <div class="left">
        <img src="@/assets/logo.png" />
      </div>
      <div class="mid">
          <p><van-icon  class='icon' name="search" size="20" style="margin-top:-1.389vw" />请输入搜索的内容</p>
          
        
      </div>
      <div class="right">
        <img :src="imgUrl"  style='border-radius:50%' @click="$router.push('/edit')"/>
        <div class="download">下载 APP</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      imgUrl:''
    }
  },
 async mounted(){
      const res=await this.$http.get('/user/' + localStorage.getItem('id'))
      console.log(res);
      
      this.imgUrl=res.data[0].user_img;
      
    }
  }

</script>

<style lang='less'>
.nav-top {
  height: 13.889vw;
  background-color: white;
  display: flex;
  .left {
    width: 30.333vw;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 80%;
    }
    }
  .mid {
      flex: 1;
      height: 8.333vw;
      margin: 2.778vw 1.389vw;
      position: relative;
      font-size: 11.999px;
      p{
          line-height: 8.333vw;
          padding-left: 6.111vw;
      }
      .icon{
          position: absolute;
          margin: 0;
          padding: 0;
          left: 0.833vw;
          top: 3.333vw;
      }
    }
  .right{
      width: 27.778vw;
      padding: 0vw 2.778vw;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 6.667vw;
        height: 6.667vw;
        margin-right: 2.222vw;
      }
      .download{  
          border-radius:1.389vw;
          color: white;
          line-height: 8.333vw;
          text-align: center;
          width: 19.444vw;
          height: 8.333vw;
          background-color: #FF8299;

      }
    }
  
}
// .uploader{
//     overflow: hidden;
// position: relative;
// .uploader-img{
//     position: absolute;
// opacity: 0;
// }

// }
</style>