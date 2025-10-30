<script setup>
    import BPJS from "./../assets/img/BPJS.png"
    import admedika from "./../assets/img/admedika.png"
    import carlife from "./../assets/img/carlife.png"
    import asabri from "./../assets/img/asabri.png"
    import BPJSTK from "./../assets/img/BPJSTK.png"
    const images = [
    {
                    "img" : BPJS,
                    "id" : 1
                },
                {
                    "img" : admedika,
                    "id"  : 2,
                },
                {
                    "img" : carlife,
                    "id"  : 3,
                },
                {
                    "img" : asabri,
                    "id" : 4,
                },
                {
                    "img" : BPJSTK,
                    "id" : 5
                }
    ]
</script>

<template>
        <div class="mitra">
        <div class="container mitra-content">
            <div class="row gap-2">
                <div class="col-lg-3 mitra-text">
                    <h3 class="mitra-title">Mitra Kerjasama</h3>
                </div>
                <div class="col-lg-7 d-flex justify-content-center gap-4">
                    <div class="mitra-image" v-for="image in images" :key="image.id">
                        <img :src="image.img">
                    </div>
                </div>
            </div>
        </div>
        <div class="mitra-line"></div>
    </div>
</template>

<style scooped>
    .mitra{
        background-color: rgb(186,217,248);
        margin: 1.5rem 0;
    }
    .mitra-content{
        padding: 1.5rem 2rem;
    }
    .mitra-text h3{
        font-size: 26px;
        font-weight: 600;
        color: #044e97;
        line-height: 50px;
    }
    .mitra-image img{
        width: 110px;
        aspect-ratio: 3/2;
        object-fit: contain;
    }
    .mitra-line{
        width: 100%;
        height: 5px;
        background-color: #044e97;
    }
</style>