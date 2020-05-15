<template>
  <div>
    <nav-top></nav-top>
    <img src="@/assets/bannerTop_new.png" class="back-img" />
    <user-detail :userInfo='model'></user-detail>
    <user-article></user-article>
  </div>
</template>

<script>
import NavTop from "@/components/common/NavTop.vue";
import UserDetail from "@/components/userCompents/UserDetail.vue";
import UserArticle from "@/components/userCompents/UserArticle.vue";
export default {
  data(){
    return{
      model:{}
    }
  },
  components: {
    NavTop,
    UserDetail,
    UserArticle
  },
  methods:{
    async userData(){
      const res= await this.$http.get('/user/'+localStorage.getItem('id'))
    this.model=res.data[0]
    }
  },
  created(){
    this.userData();
  }
}
</script>

<style>
.back-img {
  height: 130px;
  width: 100%;
}
</style>