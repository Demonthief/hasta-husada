<template>
        <div class="jumbotron">
        <div class="content">
            <h1 class="subtitle">
                PELAYANAN <br>
                RUMAH SAKIT KHUSUS BEDAH
            </h1>
        <h1 class="title">Hasta Husada</h1>
        <p>Rumah Sakit Khusus Bedah Hasta Husada 17 layanan Poliklinik dan 5 layanan Penunjang Medik.</p>
        </div>
    </div>
</template>

<style scoped>
    .jumbotron{
    margin-top: 57px;
    width: 100%;
    height: 500px;
    background: url('./../assets/img/jumbotronPelayanan.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: var(--first-color);
    text-transform: capitalize;
    padding: 1rem 8rem;
}

.subtitle, .title{
    text-transform: capitalize;
    font-style: italic;
}
.content{
    display: block;
    height: 100%;
    padding-top: 80px;
    width: 450px;
}
.subtitle{
    font-size: 27px;
    font-weight: 600;
}
.title{
    font-size: 54px;
    font-weight: 700;
    margin-top: 0;
}
.content p{
    font-size: 17px;
    font-weight: 500;
    color: #292727;
}
</style>