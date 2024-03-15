<template>
  <div>
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner overlay">
        <div class="carousel-item active">
          <img src="../assets/images/contact.webp" class="d-block w-100" alt="..." />
        </div>
      </div>
      <div class="carousel-caption">
        <h1 class="text-primary px-2" data-aos="fade-down">Verbinde dich mit uns</h1>
        <div class="footer_profile">
          <ul>
            <li data-aos-delay="200" data-aos="zoom-out-up">
              <a target="_blank" href="https://www.facebook.com/KristallGlanzR"
                ><i class="fa-brands fa-xl fa-facebook"></i
              ></a>
            </li>
            <li data-aos-delay="300" data-aos="zoom-out-up">
              <a href="https://wa.me/4917628708089"><i class="fa-brands fa-xl fa-whatsapp"></i></a>
            </li>
            <li data-aos-delay="500" data-aos="zoom-out-up">
              <a target="_blank" href="#"><i class="fa-brands fa-xl fa-instagram"></i></a>
            </li>
            <li data-aos-delay="600" data-aos="zoom-out-up">
              <a target="_blank" href="https://t.me/+4917628708089"
                ><i class="fa-brands fa-xl fa-telegram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container my-5">
      <div data-aos="zoom-in-up" class="contact-us">
        <div class="contact-box">
          <h1>verbinde dich mit uns</h1>
          <p>
            Willkommen bei der Al Lamsa Cleaning Services Company. Wir freuen uns, mit Ihnen Kontakt
            aufzunehmen
          </p>
          <p>Wie können wir Ihnen helfen?</p>
          <button class="btn btn-primary">
            <a class="text-black" target="_blank" href="https://wa.me/4917628708089">
              Für Kontakt und Anfragen
            </a>
          </button>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="map" data-aos-delay="1500" data-aos="zoom-in-down">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4854.854660978237!2d13.36582122322973!3d52.52570212221227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTLCsDMxJzM2LjUiTiAxM8KwMjEnNDEuMyJF!5e0!3m2!1sar!2str!4v1709758098636!5m2!1sar!2str"
          style="border: 0"
          allowfullscreen=""
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    setTimeout(() => {
      console.clear()
    }, 3000)
    setInterval(() => {
      console.clear()
    }, 15000)
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  .overlay {
    height: auto;
    background-color: #000000c4 !important;

    .carousel-item {
      z-index: -1 !important;
    }
  }
  .carousel-caption {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
      line-height: 1.3;
    }
  }
}

.footer_profile {
  padding: 20px 0;
}
.footer_profile ul {
  list-style: outside none none;
  margin: 0;
  padding: 0;
}
.footer_profile ul li {
  display: inline-block;
}
@media only screen and (max-width: 480px) {
  .footer_profile ul li {
    margin: 2px;
  }
}

.footer_profile ul li {
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
  a {
    transition: 0.3s;
    background: #387adf;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    border-radius: 50%;
    line-height: 40px;
    box-sizing: border-box;
    text-decoration: none;
    color: #fff;
    &:hover {
      background: #5a98f5;
      box-shadow: 0px 0px 10px 0px black;
    }
  }
}

.contact-us {
  transition: 0.3s !important;
  background-color: #387adf;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  border: 2px solid transparent;
  &:hover {
    border-color: black;
  }
  .contact-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      color: white;
      padding: 20px 0;
    }

    p {
      font-weight: bold;
      font-size: 20px;
      text-align: center;
    }

    button {
      background-color: #001aff;
      padding: 10px 20px;
      margin-bottom: 20px;

      a {
        transition: 0.3s !important;
      }

      &:hover {
        background-color: #1e34ff;
        border-color: transparent;

        a {
          color: #000 !important;
          font-weight: bold;
        }
      }
      a {
        text-decoration: none;
        color: white !important;
      }
    }
  }
}

.map {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  iframe {
    width: 80%;
    height: 350px;
  }
}

@media (max-width: 992px) {
  .carousel .carousel-item img {
    width: 200% !important;
    transform: translate(-300px, 0px);
  }
}

@media (max-width: 767px) {
  .carousel {
    .carousel-caption {
      padding-bottom: 100px;
    }
    .carousel-item img {
      width: 400% !important;
      transform: translate(-600px, 0px);
    }
  }
  .footer_profile ul li a {
    width: 50px;
    height: 50px;
  }

  .contact-us {
    .contact-box {
      h1 {
        font-size: 25px;
      }

      p {
        text-align: center;
        font-size: 15px;
      }

      button {
        font-size: 15px;
      }
    }
  }
}
</style>
