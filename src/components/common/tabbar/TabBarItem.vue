<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot  name="item-icon"></slot></div>
      <div v-else><slot  name="item-icon-active"></slot></div>  
      <div :style="activeStyle">
        <slot name="item-text"></slot>
      </div>
      
      <!-- <img src="../../assets/img/tabbar/icon_tabbar_homeup.png" >
      <div>首页</div> -->
    </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    avtiveColor:{
      type: String,
      default: 'red'
    },
  },
  data(){
    return{
      // isActive: true
      // 用isActive控制我图标以及文字的颜色
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
      // 拿到处于活跃路由path包不包含我的path
      // home  -> item1(/home) = true
    },
    activeStyle(){
      return this.isActive ? {color:this.avtiveColor} :{}
    },
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  },
}
</script>

<style>
.tab-bar-item{
  flex: 1;
}
.tab-bar-item img{
  width: 25px;
  vertical-align: middle;
  margin-bottom: 2px;
}
/* .active{
  color: red
} */
</style>