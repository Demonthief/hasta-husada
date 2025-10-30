<script setup>
    import About from '@/components/TentangKami.vue';
    import Jumobtron from '@/components/Jumobtron.vue';
    // import JumbotronNew from '@/components/JumbotronNew.vue';
    import Klinik from '@/components/Klinik.vue';
    import Mitra from '@/components/Mitra.vue';
    import Panel from '@/components/Panel.vue';
    import TimMedis from '@/components/TimMedis.vue';
    import Warta from '@/components/Warta.vue';
    import imgJumbo from '@/assets/img/jumbotron3.png';
    import JadwalPoli from '@/components/JadwalPoli.vue';
</script>
<template>
    <div>
        <Jumobtron :imgJumbo="imgJumbo"/>
        <Panel />
        <About />
        <Klinik />
        <JadwalPoli />
        <TimMedis />
        <Mitra />
        <Warta />
    </div>
</template>