<script setup>
    import jadwal1 from './../assets/img/Jadwal dokter/jadwal1.jpeg'
</script>
<template>
    <h3 class="text-center mb-5 mt-4">Jadwal Poli Hari ini</h3>
    <div class="container gap-3">
        <img :src="jadwal1" class="target text-center"  v-motion-slide-visible-once-right>
    </div>
</template>
<style scoped>
    img{
        width: 400px;
        margin-left: 33%;
    }

    h3{
        font-weight: 600;
        color: #044e97;
    }
</style>