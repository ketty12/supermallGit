<template >
  <div class="wrapper" ref="wrapper"> 
    <ul>
      <button @click="btnclick">按钮</button>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
      <li>我是谁</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Category",
  data(){
    return {
      scroll :[]
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType: 2,
      pullUpLoad:true
    })
    console.log(this.scroll);
    // this.scroll.on('scroll',(position)=>{
    //   console.log(position);
    // })
    this.scroll.on('pullingUp', ()=>{
      console.log("上拉加载更多");
    })
  },
  methods:{
    btnclick(){
      console.log("我被点击了");
    }
  }
  
};
</script>

<style scoped>
.wrapper{
  width: 100%;
  height:150px;
  background-color: pink;
  /* position: fixed; */
  overflow: hidden;
}
</style>