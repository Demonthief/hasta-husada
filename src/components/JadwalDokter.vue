<script setup>
    import jadwal1 from './../assets/img/Jadwal dokter/jadwal1.jpeg'
    import jadwal2 from './../assets/img/Jadwal dokter/jadwal2.jpeg'
    import jadwal3 from './../assets/img/Jadwal dokter/jadwal3.jpeg'
</script>
<template>
    <div class="container gap-3">
        <img :src="jadwal1" class="target"  v-motion-slide-visible-once-right>
        <img :src="jadwal2" class="target"  v-motion-slide-visible-once-right>
        <img :src="jadwal3" class="target"  v-motion-slide-visible-once-right>
    </div>
</template>
<style scoped>
    img{
        width: 300px;
        margin-right: 2rem;
    }
</style>