<template>
  <div>
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner overlay">
        <div class="carousel-item active">
          <img src="../assets/images/تنظيف7.png" class="d-block w-100" alt="..." />
        </div>
      </div>
      <div class="carousel-caption">
        <h1 data-aos-delay="100" data-aos="fade-up" class="text-primary px-2">Wer sind wir</h1>
        <p data-aos-delay="300" data-aos="fade-up">
          Kristall Glanz Reinigung ist ein führendes Unternehmen im Bereich der Reinigung und
          Desinfektion von Häusern, Unternehmen, Fabriken, Schulen, Restaurants, Autos und vielem
          mehr
        </p>
        <p data-aos-delay="600" data-aos="fade-up">
          Wir verfügen über die neuesten modernen und fortschrittlichen Geräte und Geräte sowie ein
          hochqualifiziertes Arbeitsteam, um unseren geschätzten Kunden die besten Dienstleistungen
          von Weltklasse zu bieten
        </p>
      </div>
    </div>

    <div class="about-us py-5">
      <div class="container">
        <div class="row overflow-hidden py-5">
          <div class="col-12 col-md-6">
            <div data-aos-delay="300" data-aos="fade-up-right" class="card">
              <img src="../assets/images/تنظيف8.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h3 class="card-text text-primary">Was ist mit den Mitarbeitern?</h3>
                <p>
                  Die Reinigungsfirma Kristall Glanz Reinigung garantiert allen Kunden, dass ihr
                  spezialisiertes Reinigungsteam äußerst vertrauenswürdig ist, sodass keine Sorge um
                  persönliche Gegenstände besteht
                </p>
                <p>
                  Wir bieten Ihnen alle erforderlichen Garantien, um Ihnen ein Gefühl von Sicherheit
                  und Ruhe zu geben. Wir verpflichten uns zu Qualität, Effizienz und Genauigkeit bei
                  der Auswahl jedes Mitarbeiters auf höchstem Erfahrungsniveau, mit kontinuierlichem
                  Training für beste Leistungen
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 my-5 col-md-6 offset-0 offset-lg-6">
            <div data-aos-delay="300" data-aos="fade-up-left" class="card">
              <img src="../assets/images/دعم.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h3 class="card-text text-primary">Was ist mit dem Kundensupport-Team?</h3>
                <p>
                  Unser Kundensupport-Team steht Ihnen jederzeit zur Verfügung, um alle Ihre Fragen
                  zu beantworten und eventuelle Anliegen zu lösen. Wir legen großen Wert auf
                  Kundenzufriedenheit und sind stets bemüht, Ihnen den bestmöglichen Service zu
                  bieten
                </p>
                <p class="text-center text-primary">(24/7)</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div data-aos-delay="300" data-aos="fade-up-right" class="card">
              <img src="../assets/images/money.avif" class="card-img-top" alt="..." />
              <div class="card-body">
                <h3 class="card-text text-primary">Was ist mit Zitaten?</h3>
                <p>
                  money.avif Wir bieten wettbewerbsfähige Preisangebote, die Ihren Bedürfnissen und
                  Ihrem Budget entsprechen. Sie können darauf vertrauen, dass wir Ihnen ein
                  transparentes und faires Angebot unterbreiten, das den Wert unserer
                  Dienstleistungen widerspiegelt
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  .overlay {
    height: 100vh;
    background-color: #000000c4 !important;

    .carousel-item {
      z-index: -1 !important;
    }
  }
  .carousel-caption {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 25px;
    padding-bottom: 150px;

    h1 {
      line-height: 1.3;
    }

    p {
      font-size: 18px;
      line-height: 1.7;
    }
  }
}

.about-us {
  .card {
    .card-body {
      h3 {
        padding-bottom: 15px;
      }

      p {
        line-height: 1.5;
      }
    }
  }
}

@media (max-width: 767px) {
  .carousel {
    .overlay {
      height: 90vh;

      img {
        width: auto !important;
      }
    }
    .carousel-caption {
      padding-bottom: 50px;
      p {
        font-size: 15px;
      }
    }
  }
}
</style>
