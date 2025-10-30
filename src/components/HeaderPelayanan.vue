<script setup>
    const { title } = defineProps(['title'])
</script>
<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>

<style scoped>
    header{
        position: relative;
        height: 300px;
        margin-top: 3rem;
        background: url('./../assets/img/bgbody.jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    header::before{
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right,rgba(4,78,151,.75),rgba(186,217,248,.5));
    }
    header h1{
        position: absolute;
        top: 50%; left: 20%;
        font-size: 32px;
        font-weight: 700;
        color: #fff;
        text-transform: uppercase;
        font-style: italic;
        z-index: 10;
    }
</style>