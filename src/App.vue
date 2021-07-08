<template>
  <div id="app"> 
    <drawer></drawer>
    <div id="page-wrap">
    <Home />
    </div>
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
  h1 {
    padding: 60px 0;
    font: {
      weight: bold;
    }
  }
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
  .icon-pep {
    width: 35px;
    height: 35px;
  }
  @media (min-width: 1400px) {
    .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
      max-width: 1150px !important;
    }
  }
 

</style>
