<template>
    <div id="posting" class="mb-5">
        <b-container>
            <b-row>
                <p class="d-flex justify-content-between align-items-center">
                    <span class="primary h4 m-0">Announcement</span>
                    <span>View all <b-icon class="primary h4 m-0 ms-1" icon="plus-circle-fill"></b-icon></span>
                </p>
                <div class="col-lg-7 npr">
                    <div class="slider primarybg"> 
                         <carousel :paginationEnabled="false" :per-page="1"  :mouse-drag="false" :autoplay="true" :loop="true">
                            <slide v-for="post in posts" :key="post.id">
                                <div class="slide-item">
                                    <p class="text-bold mb-2 d-flex justify-content-between items-center">
                                    <span class="white">Department {{post.dept}}</span> 
                                      
                                </p>
                                <p class="white title h5 mb-1">
                                    {{post.title}}
                                </p>
                                <p class="white content_posts">
                                    {{post.content}}
                                </p>
                                <span class="white">{{post.date}}</span>
                                </div> 
                            </slide>
                        </carousel>
                    </div> 
                </div>
                <div class="col-lg-5 npl">
                    <div class="posts overflow-auto">
                        <div class="post-sub ">
                            <div @click="opencanvas(post)" v-for="post in posts" :key="post.id" :id="post.id" class="post-item border-bottom">
                                <p class="text-bold mb-2 d-flex justify-content-between items-center">
                                    <span class="dept">Department {{post.dept}}</span><span class="showing"><b-icon class="clip" icon="paperclip"></b-icon></span>
                                    <span class="hidden"><b-icon class="pencil" icon="pencil-fill"></b-icon><b-icon class="share" icon="share-fill"></b-icon><b-icon class="arrow" icon="arrow-down-left"></b-icon></span>  
                                </p>
                                <p class="title h5 mb-1">
                                    {{post.title}}
                                </p>
                                <p class="content_posts">
                                    {{post.blurb}}
                                </p>
                                <span class="gray">{{post.date}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </b-row>
        </b-container>
    </div>
</template>
<script> 
    import db from '/fb'
    export default {
        data() {
            return {
                title: '',
                open: false,
                posts:[] 
            }
        }, 
        created() {
            db.collection('news').orderBy("date", "desc").limit(3).onSnapshot(res => {
            const updates = res.docChanges();
            updates.forEach(change => {
                if (change.type == 'added') {
                    this.posts.push({
                        ...change.doc.data(),
                        id: change.doc.id
                    })
                } else if (change.type == 'removed') {
                console.log('successfully deleted')
                } else {
                    console.log('successfully updated')
                }
            })
            })
        }, 
        methods: {
            opencanvas() {
                this.open = !this.open;
            }
        }
    }
</script>

<style lang="scss" scoped>
@media screen and (max-width: 992px) {
         
           .npl {
                padding-left: 12px !important;
            }
            .npr {
                padding-right: 12px !important;
            }
        
}
    .slide-item {
        padding: {
            top: 100px;
            left: 25px;
            right: 25px;
        }
    }
    .npl {
     padding-left: 0;
   }
   .npr {
     padding-right: 0;
   }
    .slider {
        height: 500px;
    }
    .posts {
        height: 500px;
        cursor: pointer;
        background: #ffffff;
        .post-sub {
            padding: {
                top:20px;
                left:30px;
                right: 30px;
            }
        }
        .post-item  {
            padding: {
                bottom: 30px;
            }
            .dept {
                padding: {
                    top: 20px;
                }
            }
            .showing {
                .clip {
                    width: 25px;
                    height: 25px;
                   // background: #E7E7E7;
                    border-radius: 50%;
                    padding: 5px;
                    margin: {
                        right: 10px;
                    }
                } 
            }
            .hidden { 
                display: none;
                .pencil, .share, .arrow {
                    width: 25px;
                    height: 25px; 
                    border-radius: 50%;
                    padding: 5px;
                    margin: {
                        right: 10px;
                    }
                    &:hover {
                        background: #E7E7E7;
                    }
                } 
            }
            &:hover {
                background: #F5F8FF;
            }
        }
        &:hover { 
            .hidden {
                display: block;
            }
            .showing {
                display: none;
            }
            //background: #F5F8FF;
        }
    }
</style>