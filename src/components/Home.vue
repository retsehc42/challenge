<template>
  <div>
    <sidenav></sidenav> 
    <t-nav></t-nav>
    <b-container>
      <h1 class="h1">Engage</h1>
    </b-container>
     <posts></posts>
    <b-container> 
    <tbc></tbc>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
