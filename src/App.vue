<template>
  <div id="app"> 
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="scss"> 
  $primary: #386EFF; 

  #app { 
    background: #EFF4FF;
    padding: {
      bottom: 100px;
    }
  }
  .primarybg {
    background: $primary;
  }
  .primary {
    color:$primary;
  }
  .max-w {
    max-width: 80rem !important;
  }
  .gray {
    color: #C0C0C0;
  }
  .white {
    color: #ffffff;
  }
  .tflex {
    display: flex;
  }
  .items-center {
    align-items: center;
  }
  .justify-between {
    justify-content: space-between;
  }
  
</style>
