<template>
<div>
  <div id="tab-bar"> 
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name:'TabBer',
  
}
</script>

<style>
#tab-bar{
  display: flex;
  height:49px;
  background-color: #f6f6f6;
  text-align: center;
  font-size: 10px;
  position: fixed;
  left: 0px;
  bottom: 0px;
  right: 0px;
  padding-top:3px;
  box-shadow: 0px -1px 10px rgba(100, 100, 100, 0.2);

}

</style>