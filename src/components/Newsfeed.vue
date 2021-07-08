<template>
    <div>
        <div @click="shows" class="d-flex postbar items-center mb-4">
            <div   class="rounded px-3 py-2 w-100 d-flex justify-content-between items-center primarybg">
                <span class="white">What's in your mind?</span>
                <b-icon class="white  " icon="images"></b-icon>
            </div>
            <a type="button" href="" class=" rounded px-3 py-2 primarybg"><b-icon class=" white" icon="search"></b-icon></a>
        </div>
        <div class="text-center whitespace rounded">
            <b-icon class="h1 primary" icon="person-lines-fill"></b-icon>
            <p class="h4 primary">Welcome to News feed!</p>
            <p>Write your first post and follow your workmate <br> so you are up to update</p>

        </div>
        <modal name="addpost" :adaptive="true" :clickToClose="true" height="auto" :scrollable="true" >
             <div id="post-modal">
                 <h2 class="primary h4">Create post</h2>
                 <div class="d-flex profile-name">
                     <img src="http://placebeard.it/640/480" alt="..." class="icon-pep rounded-circle">
                    <div class="d-flex w-100 justify-content-between align-item-center">
                        <span class="name d-flex align-items-center">Emily Chan</span>
                        <a href="" class="share w-25 d-flex justify-content-between align-items-center"><span class="primary">Share with</span><b-icon class="primary  m-0" icon="chevron-down"></b-icon></a>
                    </div>
                 </div>
                 <b-form @submit.prevent="onSubmit">
                      <b-form-input required class="mb-4" v-model="form.title" placeholder="Post title"></b-form-input>
                      <b-form-textarea  required
                            id="textarea"
                            v-model="form.content"
                            placeholder="Post Content"
                            rows="3"
                            max-rows="6"
                      ></b-form-textarea>
                      <fieldset>
                      <label class="primary">Select Department</label>
                      <select placeholder="Please select Department" required v-model="form.dept" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected>Open this select menu</option>
                        <option value="1">Department 1</option>
                        <option value="2">Department 2</option>
                        <option value="3">Department 3</option>
                        <option value="4">Department 4</option>
                     </select>
                     </fieldset>
                      <div class="d-flex justify-content-end pt-5">
                          <button @click="reset" class="px-3 py-2 rounded btn-can">Cancel</button>
                          <button class="px-3 py-2 rounded btn-con">Confirm</button>
                     </div>
                </b-form>
            </div>
        </modal>
    </div>
</template>
<script> 
    import db from '/fb'
    export default {
        data() {
            return {  
                form: {
                    title: '',
                    content: '',
                    dept: '', 
                }
            }
        },
        methods: {
            reset() {
                this.form.title = '';
                this.form.content = '';
                this.form.dept = '';
            },
            hide() {
                this.$modal.hide('addpost')
            },
            shows() {
                this.$modal.show('addpost')
            },
            post_success() {
                this.$toast.open({
                    message: "Successfully Added New Post titled " +this.form.title,
                    type: "success",
                    duration: 3000,
                    dismissable: true,
                    position: "top-right"
                })
            }, 
            onSubmit() { 
                var str = this.form.content;
                var blurb = str.substring(0, 100); 

                 const newsfeed = {
                    title: this.form.title,
                    content: this.form.content,
                    dept: this.form.dept,
                    blurb: blurb,
                    date: new Date().toLocaleString()
                }
                db.collection('news').add(newsfeed)
                .then(()=> {  
                    this.post_success()
                    this.reset();
                    this.hide()
                })  
            }
        }
    }
</script>

<style lang="scss" scoped>
.btn-can {
    background: #ffffff;
    color: #2BC1A9;
    border: 1px solid #2BC1A9;
    margin-right: 15px;
}
.btn-con {
    background: #2BC1A9 !important;
    border: 1px solid #2BC1A9;
    color: #ffffff;
}
#post-modal {
    padding: 40px;
    .profile-name {
        margin: 25px 0;
        .name {
            margin: {
                left: 15px;
            }
        }
        .share {
            text-decoration: none;
            border: 1px solid #C0C0C0;
            border-radius: 5px;
            padding: 0 10px
        }
    }
    fieldset {
        margin: {
            top:25px;
        }
    }
}
 .postbar {
     cursor: pointer;
     a {
         margin: {
             left: 25px;
         }
     }
 }
 .whitespace {
     padding: {
         top: 170px;
     }
     background: #ffffff;
     height: 912px;
 }
</style>