<script setup>
const { imgJumbo } = defineProps(['imgJumbo'])
</script>

<template>
  <section class="jumbotron d-flex align-items-center py-5">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <!-- Gambar -->
        <div class="col-12 col-md-6 text-center mb-4 mb-md-0">
          <div class="image-jumbo">
            <img :src="imgJumbo" alt="Hasta Husada" class="img-fluid rounded shadow" />
          </div>
        </div>

        <!-- Teks -->
        <div class="col-12 col-md-6 text-center text-md-start">
          <div class="jumbotron-content">
            <h3 class="jumbotron-subtitle mb-2">Rumah Sakit Khusus Bedah</h3>
            <h1 class="jumbotron-title mb-3">Hasta Husada</h1>
            <p class="jumbotron-text">
              Rumah Sakit Khusus Bedah Hasta Husada adalah rumah sakit tipe C khusus
              yang ada di Malang Selatan dan fokus pada pelayanan bedah.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.jumbotron {
  position: relative;
  background-image: url('/src/assets/img/bgbody.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}

.jumbotron::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(216, 228, 239, 1), rgba(186, 217, 248, 0));
  z-index: 1;
}

/* Pastikan semua konten di atas overlay */
.jumbotron-content,
.image-jumbo {
  position: relative;
  z-index: 2;
}

/* Judul & teks */
.jumbotron-subtitle {
  color: #044e97;
  font-size: 1.75rem;
  font-weight: 500;
  font-style: italic;
}

.jumbotron-title {
  color: #044e97;
  font-size: 3rem;
  font-weight: 700;
  font-style: italic;
}

.jumbotron-text {
  font-size: 1.15rem;
  color: #333;
}

/* Gambar */
.image-jumbo img {
  max-width: 100%;
  height: auto;
}

/* Responsif */
@media (max-width: 768px) {
  .jumbotron {
    text-align: center;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .jumbotron-title {
    font-size: 2rem;
  }

  .jumbotron-subtitle {
    font-size: 1.25rem;
  }

  .jumbotron-text {
    font-size: 1rem;
  }

  .image-jumbo {
    margin-bottom: 2rem;
  }
}
</style>
