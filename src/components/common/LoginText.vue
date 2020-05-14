<template>
  <div>
    <van-field :type="type" :label="label" :placeholder="placeholder" v-model="content" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: ""
    }
  },
  props: ["type", "label", "placeholder"],
  methods:{
      check(){
          const rule=new RegExp("^.{6,16}$")       
          if(rule.test(this.content)){
              this.$emit('textinput',this.content)
          }
      }
  },
  watch:{
      content(){
         this.check()
      }    
  }
}
</script>

<style>
</style>