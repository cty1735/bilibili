<template>
  <div>
    <login-top midtext="登录bilibili" style="text-align:center">
      <div
        slot="right"
        style="font-size:14px;text-align:center"
        @click="$router.push('/register')"
      >用户注册</div>
    </login-top>
    <login-text type="text" label="账号" placeholder="请输入账号" @textinput="(res) => {msg.username=res}"></login-text>
    <login-text
      type="password"
      label="密码"
      placeholder="请输入密码"
      @textinput="(res) => {msg.password=res}"
    ></login-text>
    <login-btn btntext="登录" @loginsumbit="loginsumbit"></login-btn>
  </div>
</template>

<script>
import LoginTop from "@/components/common/LoginTop.vue";
import LoginText from "@/components/common/LoginText.vue";
import LoginBtn from "@/components/common/LoginBtn.vue";
export default {
  name: "Register",
  data() {
    return {
      msg: {
        username: "",
        password: ""
      }
    };
  },
  components: {
    LoginTop,
    LoginText,
    LoginBtn
  },
  methods: {
    async loginsumbit() {
      const rulg = /^.{6,16}$/;
      if (rulg.test(this.msg.username) && rulg.test(this.msg.password)) {
        const res = await this.$http.post("/login", this.msg);
        this.$toast.fail(res.data.msg);
        if (res.data.code == 301 || res.data.code == 302) {
          return;
        }
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        setTimeout(() => {
          this.$router.push("/userinfo");
        }, 1000);
      } else {
        this.$toast.fail("格式不对，请重新输入");
      }
    }
  }
};
</script>

<style>
</style>