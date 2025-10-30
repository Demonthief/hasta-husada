<script setup>
    // import imgJumbo from './../assets/img/jumbotron1.png'
    const { imgJumbo } = defineProps(['imgJumbo'])
    console.log(imgJumbo)
</script>
<template>
      <div class="jumbotron">
        <div class="container container-fluid">
            <div class="row">
                <div class="col">
                    <div class="container container-fluid">
                        <div class="row">
                            <div class="col">
                                <div class="image-jumbo">
                                    <img :src="imgJumbo">
                                </div>
                            </div>
                            <div class="col">
                                <div class="jumbotron-content">
                                    <h3 class="jumbotron-subtitle">Dokter Rumah Sakit Khusus Bedah</h3>
                                    <h1 class="jumbotron-title">Hasta Husada</h1>
                                    <p>Saat ini Rumah Sakit Khusus Bedah Hasta Husada memiliki 25 dokter spesialis dan 8 dokter umum. Berikut informasi lebih lanjut beserta jam praktik </p>
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
        background-image: url('/src/assets/img/bgbody.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .image-jumbo{
        margin-top: 70px;
        width: 600px;
        height: 560px;
        position: relative;
        /* margin-bottom: -200px; */
    }
    .image-jumbo img{
        width: 500px;
        position: absolute;
        bottom: 0;
    }
    .jumbotron-content{
        margin-top: 30%;
    }
    .jumbotron-content .jumbotron-subtitle{
        color: var(--first-color);
        font-size: 22px;
        font-weight: 600;
        font-style: italic;
    }
    .jumbotron-content .jumbotron-title{
        color: var(--first-color);
        font-size: 55px;
        font-weight: 700;
        font-style: italic;
    }
    .jumbotron-content p{
        font-size: 1.25rem;

    }
</style>