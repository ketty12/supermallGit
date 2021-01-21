<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot ></slot>
    </div>
  </div>
</template>

<script>
import BScroll  from 'better-scroll'

export default {
  name:'Scroll',
  data(){
    return{
      scroll: null
    }
  },
  mounted(){
    setTimeout(()=>{
      this.scroll = new BScroll(this.$refs.wrapper,{
      probeType: 2,
      PullUpLoad: true,
      click: true,
    }),console.log(this.scroll)},2000)

  },
  created(){
    
  }
}
</script>

<style scoped> 

</style>