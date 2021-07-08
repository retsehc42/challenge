<template>
    <div id="sidenav" class="d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block">
        <ul class="">
            <li ><a><b-icon class="white h4 m-0" icon="house-door-fill"></b-icon><span class="hov">Home</span></a></li>
            <li><a><b-icon class="white h4 m-0" icon="circle-fill"></b-icon><span class="hov">Engage</span></a></li>
            <li><a><b-icon class="white h4 m-0" icon="circle-fill"></b-icon><span class="hov">Connect</span></a></li>
            <li><a><b-icon class="white h4 m-0" icon="circle-fill"></b-icon><span class="hov">Collerate</span></a></li>
            <li><a><b-icon class="white h4 m-0" icon="gear-fill"></b-icon><span class="hov">Admin setting</span></a></li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
    $primary: #386EFF; 
    #sidenav {
        position: fixed;
        height: 100%;
        background: $primary;
        z-index: 50;
        padding: 0px 35px;
        padding-top: 100px;
        box-shadow: 3px 2px 5px -1px rgba(0,0,0,0.24);
        -webkit-box-shadow: 3px 2px 5px -1px rgba(0,0,0,0.24);
        -moz-box-shadow: 3px 2px 5px -1px rgba(0,0,0,0.24);
        ul  {
            padding: 0;
            margin: 0;
            li {
                 
                 align-items: center;
                border: none;
                list-style-type: none;
                margin-bottom: 25px;
                padding: 8px 0;
                a {
                    display: flex;
                    width: auto;
                    color: #ffffff;
                    .hov {
                            display: none;
                        }
                    svg {
                        margin: {
                            right: 8px !important;
                        }
                    }
                }
            }
        }
        &:hover {
            transition-duration: 5s;
            ul {
                li {
                    
                    border-bottom: 2px solid #ffffff;
                    a { 
                        width: 250px;
                        .hov {
                            display: block;
                        } 
                    }
                }
            }
        }
    }
</style>

