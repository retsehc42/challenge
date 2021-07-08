<template>
    <div>
        <div class="profile mb-4 rounded">
            <div class="cover-photo"> 
                <p class="text-center">Add cover photo</p>
                <img src="http://placebeard.it/640/480" alt="..." class="position-relative rounded-circle">
            </div>
            <div class="name">
                <p class="text-center">
                    Emily Chan<br>
                    <span>Designer | creative team</span>
                </p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .profile {
        
        .cover-photo {
            background: #D7E2FF;
            p {
                padding: 20px 0;
            }
            img {
                top: 30px;
                width: 90px;
                height: 90px;
                display: block;
                margin: 0 auto;
            }
        }
        .name {
            padding: {
                top: 40px;
                bottom: 20px; 
            }
            background: #ffffff; 
            p {
                line-height: 15px;
                margin: 0;
            }
            span {
                font: {
                    size: 10px;
                }
            }
        }
    }
</style>