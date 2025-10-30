<script setup>
    import {dokters} from '@/data/dataDokter'
</script>
<template>
    <div class="jadwal-container">
        <div class="card-dokter">
            <div class="dokter" v-for="dokter in dokters" :key="dokter.id">
                <div>
                    <div class="card-spesialis">
                    <h3>{{ dokter.spesialis }}</h3>
                    <div class="spesialis-line"></div>
                </div>
                <div class="card-wrapper">
                    <div class="card target" v-motion-slide-visible-once-right v-for="d in dokter.dokter" :key="d.id">
                    <div class="card-image">
                        <img :src="d.img">
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">{{ d.nama}}</h3>
                        <h3 class="card-subtitle"> Dokter {{ d.spesialis }}</h3>
                    </div>
                    <div class="card-line"></div>
                    <div class="card-jadwal">
                        <h4>{{ d.jadwal }}</h4>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scooped>
    .dokter{
        display: flex;
        flex-wrap: wrap;
    }
    .card-dokter{
        display: flex;
        flex-wrap: wrap;
    }
    .card-wrapper{
        display: flex;
        flex-wrap: wrap;
    }
    .jadwal-container{
        padding: 17% 2.5rem;
        background-color: #D8E4EF;
        /* padding-top: 17%; */
    }
    .card-spesialis h3{
        font-size: 16px;
        color: var(--first-color);
        font-weight: 700;
        margin-bottom: 0;
        text-transform: uppercase;
    }
    .card-spesialis .spesialis-line{
        display: inline-block;
        width: 200px;
        height: 7px;
        background-color: var(--first-color);
    }
    .card{
        padding: 0;
        margin-bottom: 80px;
        margin-right: 15px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        box-shadow: 4px 4px 1px rgba(0, 0, 0, .2);
        width: 300px;
    }
    .card .card-image{
        width: 100%;
    }
    .card .card-image img{
        width: 100%;
    }
    .card .card-content{
        padding: 14px;
    }
    .card .card-content .card-title{
        font-size: 14px;
        font-weight: 700;
    }
    .card .card-content .card-subtitle{
        font-size: 12px;
        font-weight: 700;
        text-transform: capitalize;
    }
    .card .card-line{
        width: 100%;
        height: 1px;
        background-color: var(--second-color);
    }
    .card .card-jadwal{
        padding: 14px;
    }
    .card .card-jadwal h4{
        font-size: 12px;
        font-weight: 600px;
    }
</style>