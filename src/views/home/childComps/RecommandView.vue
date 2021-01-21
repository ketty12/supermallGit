<template>
  <div class="recommand"> 
    <div class="recommanditem" v-for="item in myrecommand" :key="item.title">
      <a href="item.link">
        <img :src="item.image" alt=""/>
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommandView',
  props:{
    myrecommand:{
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
.recommand{
  width: 100%;
  margin-top:10px;
  display: flex;
  font-size: 9px;
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 8px solid #eeeeee;
}
.recommanditem{
  flex: 1;
}
.recommanditem img{
  width: 77px;
}
</style>