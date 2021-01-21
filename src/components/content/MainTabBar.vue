<template>
<div>
  <tab-bar>
      <tab-bar-item path="/home"  >
      <!-- " ./assets/img/tabbar/icon_tabbar_homeup.png" -->
        <img slot="item-icon" src="~assets/img/tabbar/icon_tabbar_homeup.png" >
        <img slot="item-icon-active" src="~assets/img/tabbar/3.png">
        <div slot="item-text" >首页</div>
      </tab-bar-item>
      <tab-bar-item path="/catagory" >
        <img slot="item-icon" src="~assets/img/tabbar/02TABbar.png" >
        <img slot="item-icon-active" src="~assets/img/tabbar/2.png">
        <div slot="item-text" >分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <img slot="item-icon" src="~assets/img/tabbar/03TABbar.png" >
        <img slot="item-icon-active" src="~assets/img/tabbar/1.png">
        <div slot="item-text" >购物车</div>
      </tab-bar-item>
      <!-- avtiveColor="blue" -->
      <tab-bar-item path="/profile" >
      <img slot="item-icon" src="~assets/img/tabbar/05TABbar.png" >
        <img slot="item-icon-active" src="~assets/img/tabbar/4.png">
        <div slot="item-text" >我的</div>
      </tab-bar-item>
    </tab-bar>
</div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>