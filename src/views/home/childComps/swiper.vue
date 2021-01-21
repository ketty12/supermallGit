<template>
  <div class="Carousel">
      <el-carousel height="175px">
        <!-- indicator-position="outside" 给上面删除了这个属性 给定高度不会出现滚动条 -->
        <el-carousel-item v-for="item in mybanner" :key="item.image">
          <a :href="item.link">
            <img :src="item.image" />
          </a>
        </el-carousel-item>
      </el-carousel>
  </div>
</template>

<script>
export default {
  name: "swiper",
  props:{
    mybanner:{
      type: Array,
      default(){
        return []
      }
    }
  },
};
</script>


<style scoped>
/* .el-carousel__container{
    /* weight：100%; */
    /* height: 100%!important;
} */ 
.el-carousel__item img {
  width: 100%;
  height: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>