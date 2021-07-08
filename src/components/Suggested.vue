<template>
    <div >
        <div class="rounded people py-3 px-3 mb-4">
            <div class="mb-3 d-flex justify-content-between">
                <span>
                    Suggested people
                </span>
                <b-icon class="gray h4" icon="arrow-clockwise"></b-icon>
            </div>
            <div>
                <div v-for="data in people" :key="data.id" class="mb-4 d-flex border-bottom">
                    <img src="http://placebeard.it/640/480" alt="..." class="rounded-circle">
                    <div  class="w-100 holder">
                        <p class="mb-0 d-flex justify-content-between items-center">
                            <span class="h6">{{data.name}}</span>
                            <b-icon class="primary h4" icon="plus"></b-icon>
                        </p> 
                        <p class="gray labeler">
                            {{data.position}}<br>
                            {{data.department}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script> 
    export default {
        data() {
            return {
                people: [
                    {
                        name: 'People 1',
                        position: 'Senior Manager',
                        department: 'Development team'
                    },
                     {
                        name: 'People 2',
                        position: 'Senior Manager',
                        department: 'Development team'
                    },
                     {
                        name: 'People 3',
                        position: 'Senior Manager',
                        department: 'Development team'
                    },
                     {
                        name: 'People 4',
                        position: 'Senior Manager',
                        department: 'Development team'
                    },
                     {
                        name: 'People 5',
                        position: 'Senior Manager',
                        department: 'Development team'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.people {
    background: #ffffff;
    img {
        width: 35px;
        height: 35px;
    }
    .holder {
        padding: {
            left: 15px;
        }
    }
    .labeler {
        font: {
            size: 15px;
        }
    }
}
</style>