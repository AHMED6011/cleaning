<template>
  <div>
    <div
      id="carouselExampleFade"
      data-bs-pause="false"
      data-bs-interval="2000"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner overlay">
        <div class="carousel-item active">
          <img :src="imageDetails.image" class="d-block w-100" alt="image details" />
        </div>
      </div>
      <div class="carousel-caption">
        <h1 data-aos="fade-up" data-aos-delay="300" class="text-primary px-2">
          {{ imageDetails.title }}
        </h1>
        <h5 data-aos="fade-down" data-aos-delay="300">
          Wir bieten eine vielfältige und umfassende Palette von Dienstleistungen an, die alle
          Bedürfnisse der Gemeinschaft erfüllen
        </h5>
      </div>
    </div>

    <div class="details">
      <div class="container">
        <div class="row">
          <div
            data-aos="zoom-in-down"
            data-aos-delay="1500"
            class="col-12 d-flex justify-content-center pb-5 mb-5"
          >
            <iframe
              class="object-fit-xxl-contain video border rounded"
              :src="imageDetails.video"
              title="YouTube video player"
              frameborder="10"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div class="col-12 col-md-8 text-md-start text-center">
            <p class="details-title">
              Natürlich suchen Sie nach den besten Unternehmen, um Ihr Zuhause zu reinigen? Die
              Firma Kristall Glanz Reinigung verspricht Ihnen immer das Beste, zögern Sie nicht, uns
              zu kontaktieren
            </p>
            <p>
              Es gibt eine steigende Nachfrage in Deutschland nach Reinigungsunternehmen für
              Privathaushalte und Unternehmen, die Qualität und wettbewerbsfähige Preise suchen. Die
              Firma Kristall glanz Reinigung zeichnet sich durch hochwertige
              Reinigungsdienstleistungen und wettbewerbsfähige Preise aus und bietet
              Dienstleistungen für verschiedene Branchen wie Häuser, Unternehmen und Einrichtungen
              aller Art an. Das Unternehmen bietet vielfältige Reinigungsdienstleistungen an,
              einschließlich Desinfektion und Garantien für Qualität und Sicherheit
            </p>
            <p>
              Die Reinigungsfirma Kristall Glanz Reinigung verfügt über ein Team von erfahrenen
              Reinigungs- und Desinfektionsexperten und -technikern, die mit umfangreicher Erfahrung
              in diesem Bereich ausgestattet sind. Das Unternehmen legt großen Wert auf die
              Reinigung der benötigten Räumlichkeiten mit höchster Präzision. Darüber hinaus
              spezialisiert sich das Unternehmen auf Desinfektionsverfahren gegen Bakterien und
              Insekten, die immer eine wichtige Grundanforderung der Kunden darstellen
            </p>
            <p>
              Das Unternehmen bietet auch Reinigungskräfte auf Abruf an und stellt alle
              erforderlichen Garantien zur Verfügung, um Ihnen ein sicheres Gefühl zu geben. Es
              verpflichtet sich zu Qualitäts-, Effizienz- und Präzisionsstandards und stellt sicher,
              dass jeder Mitarbeiter auf höchstem Erfahrungs- und Vertrauensniveau eingestellt wird
            </p>
            <p>
              Das Unternehmen bietet Reinigungskräfte auf Abruf an und stellt alle erforderlichen
              Garantien zur Verfügung, um Ihnen ein sicheres Gefühl zu geben. Die Firma verpflichtet
              sich zu Qualitäts-, Effizienz- und Präzisionsstandards und stellt sicher, dass jeder
              Mitarbeiter auf höchstem Erfahrungs- und Vertrauensniveau eingestellt wird
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imagesData from '../images.json'

export default {
  props: ['id'],
  data() {
    return {
      imageDetails: null
    }
  },
  created() {
    this.imageDetails = imagesData.find((item) => item.id == this.id)
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  top: -150px;

  .overlay {
    height: 140vh;
    position: relative !important;
    background-color: #000000c4 !important;

    .carousel-item {
      z-index: -1 !important;
    }
  }

  .carousel-caption {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
    padding-bottom: 200px;

    h1 {
      line-height: 1.3;
    }

    h5 {
      line-height: 1.5;
    }
  }
}

.details {
  position: relative;
  background-color: #0d6efd2b;
  box-shadow: 0px 0px 50px 30px #0d6efd2b;
  top: -100px;

  .video {
    width: 560px;
    height: 315px;
  }
  .details-title {
    font-size: 25px;
    line-height: 1.5;
    color: #0d6efd;
  }

  p {
    font-weight: bold;
    line-height: 1.8;
  }
}

@media (max-width: 992px) {
  .carousel {
    .carousel-item {
      img {
        width: auto !important;
      }
    }
  }
}

@media (max-width: 776px) {
  .carousel {
    .overlay {
      height: 100vh;

      img {
        position: relative;
        top: 100px;
        right: 400px;
      }
    }

    .carousel-caption {
      padding-bottom: 0px;

      h5 {
        font-size: 18px;
      }
    }
  }

  .details {
    .video {
      height: 200px;
    }
    .details-title {
      font-size: 18px;
    }

    p {
      font-size: 15px;
    }
  }
}
</style>
