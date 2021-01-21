<template>
  <div class="goodsItem">
    <img :src="goodsItem.show.img" />
    <div class="goodsInfo">
      <p>{{goodsItem.title}}</p>
      <span id="price">{{goodsItem.price}} </span>
      <span id="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  props:{
    goodsItem: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style>
.goodsItem{
  position: relative;
  padding-bottom: 48px;
  
  width: 48%;
}
.goodsItem img{
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.goodsInfo{
  width: 100%;
  font-size: 12px;
  position: absolute;
  bottom : 5px;
  text-align: center;
  
}
.goodsInfo p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px ;
}
#price{
  color: red;
  margin-right: 20px;
}
#collect{
  position: relative
}
</style>