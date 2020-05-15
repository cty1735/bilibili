<template>
  <div>
    <div style="margin-bottom:5vw">
      <nav-top></nav-top>
    </div>
    <div class="uploader">
      <van-uploader :after-read="afterRead" class="uploader-img" preview-size="100vw" />
      <edit-banner left="头像" style="line-height:90px">
        <div slot="right">
          <img
            :src="model.user_img"
            v-if="model.user_img"
            style="width:60px;height:60px;border-radius: 50%;"
          />
          <img
            src="@/assets/head_img.jpg"
            style="width:60px;height:60px;border-radius: 50%;"
            v-else
          />
        </div>
      </edit-banner>
    </div>

    <edit-banner left="昵称" @bannerClick="show = true">
      <div slot="right">{{model.name}}</div>
    </edit-banner>
    <edit-banner left="UID">
      <div slot="right">{{model.username}}</div>
    </edit-banner>
    <edit-banner left="性别" @bannerClick="gendershow = true">
      <div slot="right">{{model.gender ? '男' : '女'}}</div>
    </edit-banner>
    <edit-banner left="个性签名" @bannerClick="textshow = true">
      <div slot="right">{{model.user_desc}}</div>
    </edit-banner>
    <div @click="$router.back()" style="text-align: center;color:#999999;font-size:16px">返回个人中心</div>

    <van-dialog
      v-model="show"
      title="昵称"
      show-cancel-button
      @confirm="confirmClick"
      @cancel="content = ''"
    >
      <van-field v-model="content" autofocus />
    </van-dialog>
    <van-dialog
      v-model="textshow"
      title="个签"
      show-cancel-button
      @confirm="textareaClick"
      @cancel="content = ''"
    >
      <van-field v-model="content" type="textarea" autofocus />
    </van-dialog>

    <van-action-sheet v-model="gendershow" cancel-text="取消" :actions="actions" @select="onSelect" />
  </div>
</template>

<script>
import NavTop from "@/components/common/NavTop.vue";
import EditBanner from "@/components/common/EditBanner.vue";

export default {
  data() {
    return {
      model: {},
      show: false,
      textshow: false,
      gendershow: false,
      content: "",
      actions: [
        {
          name: "男",
          val: 1
        },
        {
          name: "女",
          val: 0
        }
      ]
    };
  },
  components: {
    NavTop,
    EditBanner
  },
  methods: {
    async selectUser() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.model = res.data[0];
    },
    async afterRead(file) {
      const fromdata = new FormData();
      fromdata.append("file", file.file);
      const res = await this.$http.post("/upload", fromdata);
      this.model.user_img = res.data.url;
      this.UserUpdate();
    //   this.$refs.navbar.NavInit();
    },
    async UserUpdate() {
      const res = await this.$http.post(
        "/update/" + localStorage.getItem("id"),
        this.model
      );
      if (res.data.code == 200) {
        this.$toast.fail("修改成功");
      }
    },
    confirmClick() {
      this.model.name = this.content;
      this.UserUpdate();
      this.content = "";
    },
    textareaClick() {
      this.model.user_desc = this.content;
      this.UserUpdate();
      this.content = "";
    },
    onSelect(data) {
      this.model.gender = data.val;
      this.UserUpdate();
      this.gendershow = false;
    }
  },

  created() {
    this.selectUser();
  }
};
</script>

<style lang='less'>
.back-img {
  height: 36.111vw;
  width: 100%;
}
.uploader{
    overflow: hidden;
position: relative;
.uploader-img{
    position: absolute;
opacity: 0;
}

}
</style>