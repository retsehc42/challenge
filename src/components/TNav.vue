<template>
   <div>
  <b-navbar variant="white">
    <b-container>
        <b-navbar-brand> 
           <img src="@/assets/logo.png">
        </b-navbar-brand>
        <div class=" members d-flex  align-items-center">
            <t-button text="invite members"></t-button>
            <b-icon class="gray h4 m-0" icon="bell-fill"></b-icon>
            <b-icon class="gray h4 m-0" icon="gear-fill"></b-icon>
            <img src="http://placebeard.it/640/480" alt="..." class="icon-pep rounded-circle">
            <b-icon class="primary  m-0" icon="chevron-down"></b-icon>
        </div>
    </b-container>
  </b-navbar>
</div>
</template>
<style lang="scss" >
      .members { 
        width: 350px;
        img, svg {
          margin: {
            left: 20px !important;
          }
        }
      }
     @media screen and (max-width: 1200px) {
        .members {
          display: none !important;
        }
     }
</style>