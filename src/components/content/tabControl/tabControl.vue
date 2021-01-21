<template>
  <div class="tabcontrol">
    <div v-for="(item, index) in titles" :key="item"
      :class="{active: index==currentIndex}" class="tabcontrol-item" 
      @click="itemClick(index)">
      <span> {{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabControl',
  props:{
    titles:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex: 0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style>
.tabcontrol{
  display: flex;
  font-size: 15px;
}
.tabcontrol-item{
  flex:1;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.tabcontrol-item span{
  padding: 5px;
}
.active{
  color: var(--color-high-text);
}
.active span{
  border-bottom: 3px solid var(--color-tint);
}
</style>