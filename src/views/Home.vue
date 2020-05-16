<template>
  <div class="home">
    <nav-top></nav-top>
    <van-tabs v-model="active" swipeable sticky>
      <van-tab v-for="(item,index) in category" :title="item.title" :key="index">
        <van-list v-model="loading" :immediate-check='false' :finished="finished" finished-text="没有更多了" @load="onLoad">
          <div class="detail-parent">
            <detail
              class="detal-item"
              :selectItem="categorychild"
              v-if="active == index"
              v-for="(categorychild,categorychildindex) in item.list"
              :key="categorychildindex"
            ></detail>
          </div>
          <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NavTop from "@/components/common/NavTop.vue";
import Detail from "@/views/Detail.vue";
export default {
  data() {
    return {
      category: [],
      active: 0,
      finished:false,
      loading:false
    };
  },
  components: {
    NavTop,
    Detail
  },
  methods: {
    async getCategory() {
      const res = await this.$http.get("/category");
      this.category = this.chengeCategory(res.data);
      this.selectArticle();
      console.log(this.category);
    },
    async selectArticle() {
      const categoryitem = this.categoryItem();
      const res = await this.$http.get("/detail/" + categoryitem._id, {
        params: {
          page: categoryitem.page,
          pagesize: categoryitem.pagesize
        }
      });
      categoryitem.list.push(...res.data);
            categoryitem.loading = false
      // if(res.data.length < categoryitem.pagesize) {
      //   categoryitem.finished = true
      // }
    },
    chengeCategory(data) {
      const newCategory = data.map((item, index) => {
        item.list = [];
        item.page = 0;
        item.pagesize = 10;
        return item;
      });
      return newCategory;
    },
    onLoad(){
      const data=this.categoryItem();
      data.page+=1
      this.selectArticle()
      
    },
    categoryItem() {
      const categoryitem = this.category[this.active];
      return categoryitem;
    }
  },
  watch: {
    active() {
      const categoryitem = this.categoryItem();
      this.selectArticle();
    }
  },
  created() {
    this.getCategory();
  }
};
</script>

<style lang="less" scoped>
.detail-parent {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .detal-item {
    width: 45%;
    margin: 5px 0;
  }
}
</style>
