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
                 <b-form @submit.prevent="onSubmit">
                      <b-form-input required class="mb-4" v-model="form.title" placeholder="Post title"></b-form-input>
                      <b-form-textarea  required
                            id="textarea"
                            v-model="form.content"
                            placeholder="Post Content"
                            rows="3"
                            max-rows="6"
                      ></b-form-textarea>
                      
                      <select placeholder="Please select Department" required v-model="form.dept" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected>Open this select menu</option>
                        <option value="1">Department 1</option>
                        <option value="2">Department 2</option>
                        <option value="3">Department 3</option>
                        <option value="4">Department 4</option>
                     </select>
                      <div class="d-flex justify-content-end pt-5">
                          <button @click="hide" class="px-3 py-2 rounded btn-can">Cancel</button>
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
                // console.log(this.form.title)
                // console.log(this.form.content)
                // console.log(this.form.dept)
                // console.log(new Date().toLocaleString())

                 const newsfeed = {
                    title: this.form.title,
                    content: this.form.content,
                    dept: this.form.dept,
                    date: new Date().toLocaleString()
                }
                db.collection('news').add(newsfeed)
                .then(()=> {  
                    this.post_success()
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