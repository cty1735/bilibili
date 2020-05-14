<template>
  <div>
      <div class="login-btn" @click="btnsumbit">{{btntext}}</div>
  </div>
</template>

<script>
export default {
props:['btntext'],
methods:{
    btnsumbit(){
        this.$emit('loginsumbit')
    }
}
}
</script>

<style lang='less'>
.login-btn{
 height: 11.111vw;
 background-color:#FF9DB5;
 font-size: 4.444vw;
 border-radius: 5.556vw;
 display: flex;
 justify-content: center;
 align-items: center;
}
</style>