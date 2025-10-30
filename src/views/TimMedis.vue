<script setup>
    import Jumobtron from '@/components/JumobtronJadwal.vue';
    import Panel from '@/components/PanelJadwal.vue'
    import TimMedisContent from '@/components/TimMedisContent.vue';
    import imgJumbo from './../assets/img/jumbotron2.png'


</script>
<template>
    <Jumobtron :imgJumbo="imgJumbo" />
    <Panel />
    <TimMedisContent />
    
</template>