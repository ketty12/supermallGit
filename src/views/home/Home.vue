<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div> </nav-bar>
    <!-- class="content" -->
    <scroll class="content">
      <swiper :mybanner="banners"></swiper>
      <recommand-view :myrecommand="recommends" />
      <feature-view />
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      />
      <goods-list :goods="showGoods"> </goods-list>
    </scroll>
    <ul>
      <li v-for="item in 100" :key="item">列表{{ item }}</li>
    </ul>
    <div class="test"></div>
  </div>
</template>

<script>
import swiper from "./childComps/swiper.vue";
import RecommandView from "./childComps/RecommandView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import tabControl from "components/content/tabControl/tabControl";
import GoodsList from "components/content/goods/GoodsList";
import GoodsListItem from "components/content/goods/GoodsListItem";
import Scroll from "components/common/scroll/Scroll";

import { getHomeMultidata, getHomeGoods } from "network/home";
export default {
  components: {
    swiper,
    RecommandView,
    FeatureView,
    NavBar,
    tabControl,
    GoodsList,
    GoodsListItem,
    Scroll,
  },
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    // 请求多个数据
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    // 事件监听相关的方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    // 网络请求相关的方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        // this.result = res
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
        //轮播图数据
        console.log(this.banners);
        console.log(this.recommends);
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        console.log(res.data.data.list);
        // res.data.data.list
        // 将一个数组A添加到另一个B后面，[b1,b2,b3,,,a1,a2,a3,,,]
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  /* 导航栏背景颜色自定义 等等*/
  background-color: var(--color-tint);
  color: #fff;
  font-size: 18px;
  /* 如何让“购物街”导航栏固定不滚动 */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
/* sticky和top属性在一起，将组件到达某一位置时粘性固定下来 */
.tab-control {
  background-color: #fff;
  position: sticky;
  top: 44px;
  z-index: 9;
}
.test {
  width: 110px;
  height: 110px;
  background-color: red;
  position: absolute;
}
.content {
  touch-action:none;
  height: calc(100% - 80px);
  margin-top: 44px;
  position: absolute;
}

/* .wrapper{
  height: calc(100% - 80px);
  /* overflow: hidden; */
/* position:fixed; */
/* margin-top:44px;
} */
/* .content{
  height: calc(100% - 45px);
  /* overflow: hidden; */
/* position:absolute;
  margin-top:44px;

} */
</style>