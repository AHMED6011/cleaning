<template>
  <div class="footer">
    <div class="container">
      <div class="text-center">
        <div class="row justify-content-center align-items-center">
          <div class="footer_menu col-lg-4 col-sm-12">
            <input placeholder="Deine E-Mail" class="input" name="email" type="email" />
            <button class="button" onclick="window.location.href='mailto:rodrigmarco28@gmail.com'">
              Kontakt
            </button>
          </div>
          <div class="footer_copyright col-lg-4 col-md-6 col-sm-10">
            <p>© 2024. All Rights Reserved.</p>
          </div>
          <div class="footer_profile col-lg-4 col-md-6 col-sm-10">
            <ul>
              <li>
                <a target="_blank" href="https://www.facebook.com/KristallGlanzR"
                  ><i class="fa-brands fa-facebook"></i
                ></a>
              </li>
              <li>
                <a href="https://wa.me/4917628708089"><i class="fa-brands fa-whatsapp"></i></a>
              </li>
              <li>
                <a target="_blank" href="https://www.instagram.com/kristallglanzreinigung/"
                  ><i class="fa-brands fa-instagram"></i
                ></a>
              </li>
              <li>
                <a target="_blank" href="https://t.me/+4917628708089"
                  ><i class="fa-brands fa-telegram"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterView'
}
</script>

<style lang="scss" scoped>
.footer {
  background: #0c359e;
}
.footer_menu {
  padding: 20px 0;
}
.footer_menu ul {
  list-style: none;
  text-align: center;
  margin: 0;
}
.footer_menu ul li {
  display: inline-block;
}
.footer_menu ul li a {
  text-decoration: none;
  color: #fff;
  padding: 0 10px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.footer_menu ul li a:hover {
  color: #000000;
}

/*START FOOTER SOCIAL DESIGN*/
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
.footer_profile ul li a img {
  width: 60px;
}

.footer_profile ul li {
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
  a {
    background: #387adf;
    width: 40px;
    height: 40px;
    display: block;
    text-align: center;
    margin-right: 5px;
    border-radius: 50%;
    line-height: 40px;
    box-sizing: border-box;
    text-decoration: none;
    -webkit-transition: 0.3s;
    color: #fff;
    &:hover {
      background: #5a98f5;
      box-shadow: 0px 0px 10px 0px black;
    }
  }
}
.footer_copyright {
  padding: 20px 0;
  text-transform: uppercase;
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #fff;

  p {
    margin: 0;
  }
}

.input {
  max-width: 190px;
  padding: 10px;
  font-size: 17px;
  color: black;
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  border: 2px solid #fff;
}

.button {
  border: none;
  background-color: #1363df;
  text-decoration: none;
  padding: 12px;
  font-size: 17px;
  color: #fff;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  cursor: pointer;
}
</style>
