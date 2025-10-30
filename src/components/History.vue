<script setup>
    import { useRoute } from 'vue-router';
    const historys = [
        {
            "year" : 2001,
            "description" : `2001
                Klinik Hasta Husada pertama kali didirikan pada tanggal 11 Maret 2001 oleh Alm. dr. Boedi Prijatno, Sp.B., FINACS., S.E., M.M. `,
            "id" : 1 
        },
        {
            "year" : 2004,
            "description" : ` Klinik Hasta Husada berubah menjadi Rumah Sakit Khusus Bedah Hasta Husada.`,
            "id" : 2 
        },
        {
            "year" : 2012,
            "description" : ` RSKB Hasta Husada memperoleh akreditasi penuh tingkat dasar oleh Tim Komite Akreditasi Rumah Sakit (KARS)`,
            "id": 3 
        },
        {
            "year" : 2019,
            "description" : ` RSKB Hasta Husada memperoleh akreditasi penuh tingkat dasar oleh Tim Komite Akreditasi Rumah Sakit (KARS)`,
            "id" : 4
        },
    ]

    const route = useRoute();
    const historyId = parseInt(route.params.id);
    const history = historys.find((h) => h.id === historyId)
    console.log(historyId)
</script>

<template>
    <div class="target content" v-motion-slide-visible-once-right>
        <h4>{{ history.year }}</h4>
        <p>{{ history.description }}</p>
        <!-- <div class="description-arrow"> <a href="#"> > </a> </div> -->
    </div>
</template>

<style scoped>
    .content{
        position: relative;
    }
     h4{
        font-size: 32px;
        font-weight: 700;
        color: var(--first-color);
    }
     p{
        font-weight: 25px;
        font-weight: 600;
        color: #fff;
    }
     a{
        text-decoration: none;
        color: #fff;
        font-size: 2rem;
        position: absolute;
        bottom: 5px; right: 30px;
    }
    .description-arrow a{
        text-decoration: none;
        color: #fff;
        font-size: 2rem;
        position: absolute;
    }
    .description-arrow{
        position: absolute;
        bottom: 5px; right: 30px;
    }
</style>