<script setup>
    const kliniks = [
    {
                    "spesialis" : "Orthopedi",
                    "icon" : "fa-thin fa-bone-break",
                    "id":1
                },
                {
                    "spesialis": "Bedah",
                    "icon": "fa-thin fa-scalpel",
                    "id":2
                },
                {
                    "spesialis" : "Jantung",
                    "icon" : "fa-regular fa-heart-pulse",
                    "id":3
                },
                {
                    "spesialis":"Mata",
                    "icon": "fa-regular fa-eye",
                    "id":4
                },
                {
                    "spesialis": "Anak",
                    "icon" : "fa-thin fa-baby",
                    "id":5
                },
                {
                    "spesialis": "Syaraf",
                    "icon": "fa-light fa-snowflake",
                    "id":6 
                },
                {
                    "spesialis" : "Lebih Lengkap",
                    "icon" : "",
                    "link": "/pelayanan",
                    "id" : 7
                }
    ]
</script>

<template>
    <div class="klinik-container">
        <h1 class="section-title text-center mb-5 target" v-motion-slide-visible-once-right>Klinik Spesialis</h1>
        <div class="container">
            <div class="row gap-5 justify-content-center align-content-center">
                <div class="col-lg-2 text-center klinik-content target" v-for="klinik in kliniks" :key="klinik.id" v-motion-slide-visible-once-right>
                    <div class="spesialis-icon">
                         <i :class="klinik.icon"></i>
                    </div>
                    <h3><a :href="klinik.link">{{ klinik.spesialis }}</a></h3>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .klinik-container{
        background: url('./../assets/img/bgklinik.jpg');
        padding: 2rem;
    }
    .spesialis-icon i{
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    .klinik-content{
        padding: 1rem 2rem;
        border-radius: 24px;
        background: linear-gradient(to right,rgba(4,78,151,.75),rgba(186,217,248,.5));
        color: #fff;
        cursor: pointer;
        transition: .3s all ease-in-out;  
    }
    .klinik-content:last-child{
        background-color: var(--first-color);
    }
    .klinik-content:hover{
        background-color: var(--first-color);
    }
    .klinik-content h3{
        font-size: 25px;
        font-weight: 600;
    }
    .klinik-content h3 a{
        text-decoration: none;
        color: #fff;
    }
    .klinik-container h1{
        font-size: 30px;
        font-weight: 600;
        color: #044e97;
    }
</style>