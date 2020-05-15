<template>
  <div @click="bannerClick">
      <div class="edit-banner">
          <span>{{left}}</span>
          <span>
              <slot name="right">算法</slot>
              </span>
      </div>
  </div>
</template>

<script>
export default {
props:['left'],
methods:{
    bannerClick(){
        this.$emit('bannerClick')
    }
}
}
</script>

<style lang='less'>
.edit-banner{
padding: 4.167vw 4.167vw;
font-size: 3.889vw;
display: flex;
justify-content: space-between;

}
</style>