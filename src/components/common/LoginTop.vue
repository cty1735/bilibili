<template>
  <div>
      <div class="login-top">
          <div class="left"></div>
          <div class="mid-top">{{midtext}}</div>
          <!-- <div class="right">{{righttext}}</div> -->
          <div>
              <slot name='right'></slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {
props:['midtext','righttext']
}
</script>

<style lang='less'>
.login-top{
height: 12.5vw;
font-size: 16px;
background-color: lightblue;
display: flex;
justify-content: center;
align-items: center;
div{
    flex: 1;
}
}
</style>