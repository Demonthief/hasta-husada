<script setup>
    import {RouterLink} from 'vue-router'
    import aryani from "./../assets/img/Aryanicoba.jpg"
    import charunnisa from './../assets/img/dokter/chairunnisa.png'
    import diyah from "./../assets/img/Diyah.jpg"
    import widi from "./../assets/img/widi.jpg"
    const dokters = [
    {
                "nama" : "dr.Aryani Vindhya Putri, Sp.M",
                "spesialis" : "Spesialis Mata",
                "jadwal" : "Senin,Selasa: 16.00-18.00 Rabu,Kamis: 19.00-21.00,Sabtu: 09.00-11.00 ",
                "image" : aryani,
                "id" : 1,
            },
            {
                    "nama" : "dr. Chairunisa Ferdiana, Sp.M",
                    "spesialis" : "dokter spesialis mata",
                    "jadwal" : `Senin,Rabu, Jumat : 16.00-18.00`,
                    "image" : charunnisa,
                    "id" : 2
            },
            {
                "nama" : "dr.Diyah Saraswati, Sp.PD",
                "spesialis" : "Spesialis Penyakit Dalam",
                "jadwal" : "Senin,Selasa,Kamis: 13.00-15.00",
                "image" : diyah,
                "id" : 3,
            },
            {
                "nama" : "dr.Widi Hatmaka, Sp.OG",
                "spesialis" : "Spesialis Obgyn",
                "jadwal" : "Senin,Selasa,Kamis: 13.00-15.00",
                "image" : widi,
                "id" : 4,
            },
    ]
</script>

<template>
    <div class="tim-medis">
        <h1 class="text-center my-4 section-title">Tim Medis</h1>
          <div class="container card-container gap-0">
            <div class="row">
                <div  v-for="dokter in dokters" :key="dokter.id" class="col-3 target" v-motion-slide-visible-once-right>
                    <div class="card-content bg-white">
                        <div class="card-image">
                            <img :src="dokter.image" :alt="dokter.nama" class="img-fluid">
                        </div>
                        <div class="card-text-content">
                            <div class="card-title"><h3>{{ dokter.nama }}</h3></div>
                            <div class="card-subtitle"><h4>{{ dokter.spesialis }}</h4></div>
                            <div class="card-line"></div>
                        </div> 
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-2">
                    <button class="btn">
                        <a href="/jadwalDokter">Selengkapnya</a>
                         <!-- <router-link to="/jadwalDokter">Selengkapnya</router-link> -->
                    </button>
                </div>
            </div>
          </div>
    </div>
</template>

<style scoped>
    .tim-medis{
        margin-top: 5rem;
    }
    .section-title{
        font-size: 30px;
        font-weight: 600;
        color: #044e97;
    }
    .card-container{
        position: relative;
        margin-bottom: 3rem;
    }
    .card-content{
        position: relative;
        /* display: flex;
        justify-content: center;
        flex-direction: column; */
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        /* padding: 2rem; */
        box-shadow: 4px 4px 1px rgba(0, 0, 0, .2);
    }

    .card-content .card-text-content{
        background-color: #fff;
        border-radius: 20px;
        padding: 20px;
    }
    .card-content .card-text-content .card-title h3{
        font-size: 1rem;
        font-weight: 700;
    }
    .card-content .card-text-content .card-subtitle h4{
        font-size: .75rem;
        font-weight: 600;
    }
    .card-content .card-image img{
        height: 254px;
        width: 100%;
    }
    .card-line{
        width: 100%;
        height: 2px;
        margin-bottom: 3rem;
        background-color: #fbc70f;
    }
    .btn{
        margin: 3rem auto;
        text-align: center;
        padding: 1.25rem;
        background-color: #044e97;
        color: #fff;
        border-radius: 1rem;
        transition: .3s all ease-in-out;
    }
    .btn a{
        display: inline-block;
        font-size: 20px;
        font-weight: 800;
        text-decoration: none;
        color: #fff;
    }
    .btn:hover{
        background-color: #fff;
        color: #044e97;
        border: solid 1px #044e97;
    }
    .btn:hover a{
        color: #044e97;
    }
</style>