<script setup>
    // import imgJumbo from './../assets/img/jumbotron1.png'
    const { imgJumbo } = defineProps(['imgJumbo'])
</script>
<template>
      <div class="jumbotron d-flex align-item-center py-5">
        <div class="container">
            <div class="row align-item-center justify-content-center">
                <div class="col">
                    <div class="container container-fluid">
                        <div class="row align-item-center justify-content-center">
                            <div class="col-12 col-md-6 text-center mb-4 mb-md-0">
                                <div class="image-jumbo">
                                    <img :src="imgJumbo">
                                </div>
                            </div>
                            <div class="col-12 col-md-6 text-center text-md-start jumbotron-content-container">
                                <div class="jumbotron-content">
                                    <h3 class="jumbotron-subtitle mb-2">Rumah Sakit Khusus Bedah</h3>
                                    <h1 class="jumbotron-title mb-3">Hasta Husada</h1>
                                    <p> Rumah Sakit Khusus Bedah Hasta Husada adalah rumah sakit tipe C Khusus yang ada di Malang Selatan dan fokus pada pelayanan bedah</p>
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
    .jumbotron::before{
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        /* background-color: #044e97; */
        background: linear-gradient(to top,rgba(216,228,239,1),rgba(186,217,248,0));
        
    }
    .image-jumbo{
        margin-top: 70px;
        width: 600px;
        height: 600px;
        margin-bottom: 0;
        position: relative;
        z-index: 5;
    }
    .image-jumbo img{
        width: 500px;
    }
    .jumbotron-content{
        margin-top: 50%;
        position: relative;
        z-index: 5;
    }
    .jumbotron-content .jumbotron-subtitle{
        color: #044e97;
        font-size: 2rem;
        font-weight: 500;
        font-style: italic;
    }
    .jumbotron-content .jumbotron-title{
        color: #044e97;
        font-size: 3.5rem;
        font-weight: 700;
        font-style: italic;
    }
    .jumbotron-content p{
        font-size: 1.25rem;

    }

</style>