<script setup>
    import wartaImg from './../assets/img/jumbotronWarta.jpg'
</script>
<template>
          <div class="jumbotron">
        <div class="container container-fluid">
            <div class="row">
                <div class="col">
                    <div class="container container-fluid">
                        <div class="row">
                            <div class="col">
                            </div>
                            <div class="col">
                                <div class="jumbotron-content">
                                    <h1 class="jumbotron-title">warta hasta</h1>
                                    <p> Kenali kami melalui artikel kegiatan yang kami lakukan, banyak informasi juga soal pelayanan kesehatan yang kita lakukan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </div> 
</template>

<style scoped>
    .jumbotron{
        position: relative;
        background-image: url('/src/assets/img/jumbotronWarta.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 500px;
        margin-bottom: 4rem;
    }

    .jumbotron-content{
        margin-top: 30%;
    }
    .jumbotron-content .jumbotron-title{
        color: var(--first-color);
        font-size: 3.5rem;
        font-weight: 700;
        font-style: italic;
        text-transform: uppercase;
    }
    .jumbotron-content p{
        font-size: 1.25rem;
    }
</style>