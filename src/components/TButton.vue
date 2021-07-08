<template>
    <div class="warapper">
        <a href="#" class="tbutton">{{text}}</a>
    </div>
</template>
<script> 
export default {
    props:['text']
}
</script>
<style lang="scss" scoped>
    $primary: #386EFF;

   .tbutton {
    display: flex;
    border-radius: 0.25rem;
    align-items: center;
    text-decoration: none;
    background: $primary;
    color: white;
    padding: {
      left:25px !important;
      right: 25px;
      top: 8px;
      bottom: 8px;
    }
  }
</style>
