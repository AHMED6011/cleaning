<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg p-0">
      <div class="container-fluid">
        <RouterLink @click="$toUp" class="navbar-brand p-0 ps-0 ps-md-5 py-3" to="/">
          <img width="135" src="../assets/images/1words.png" alt="logo" />
        </RouterLink>
        <button
          :class="{
            'navbar-toggler border-light collapsed': isExpanded,
            'navbar-toggler border-light': !isExpanded
          }"
          @click="toggleExpanded()"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-label="Toggle navigation"
          :aria-expanded="isExpanded"
        >
          <i class="fa-solid fa-bars fa-xl py-3 px-1 text-light"></i>
        </button>
        <!-- <div
          :class="{
            'collapse justify-content-center pe-5 navbar-collapse': isExpanded,
            'justify-content-center pe-5 navbar-collapse collapse show': !isExpanded
          }"
          id="navbarNavDropdown"
        > -->
        <div :class="classes" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item px-3">
              <RouterLink
                @click="$toUp(), toggleExpanded()"
                class="nav-link"
                aria-current="page"
                to="/"
                >Heim</RouterLink
              >
            </li>
            <li class="nav-item px-3">
              <RouterLink @click="$toUp(), toggleExpanded()" class="nav-link" to="/about"
                >Um</RouterLink
              >
            </li>
            <li class="nav-item px-3">
              <button class="nav-link" @click="toggleExpanded(), scrollToPosition()">
                Dienstleistungen
              </button>
            </li>
            <li class="nav-item px-3">
              <RouterLink @click="$toUp(), toggleExpanded()" class="nav-link" to="/contact"
                >Kontakt</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  name: 'HeaderView',
  component: { RouterLink },
  data() {
    return {
      closed: true,
      isExpanded: true,
      classes: 'collapse pe-5 justify-content-center navbar-collapse'
    }
  },
  methods: {
    toggleExpanded() {
      if (this.isExpanded) {
        setTimeout(() => {
          this.classes = 'pe-5 justify-content-center navbar-collapse collapse show'
        }, 300)
        this.classes = 'pe-5 justify-content-center navbar-collapse collapsing'
      } else {
        setTimeout(() => {
          this.classes = 'collapse pe-5 justify-content-center navbar-collapse'
        }, 300)
        this.classes = 'pe-5 justify-content-center navbar-collapse collapsing'
      }

      this.isExpanded = !this.isExpanded
    },
    scrollToPosition() {
      this.$router.push('/')
      const scrollTo = window.innerWidth <= 768 ? 5000 : 2350
      setTimeout(() => {
        window.scrollTo({
          top: scrollTo,
          behavior: 'smooth'
        })
        console.log(scrollTo)
      }, 200)
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  width: 100% !important;
  position: fixed;
  z-index: 10;
}
nav {
  backdrop-filter: blur(5px);
  background-color: #0000004f;

  .navbar-toggler {
    &:focus {
      box-shadow: none;
    }
  }

  .nav-link {
    transition: 0.3s;
    color: #fff;
    &:hover {
      transform: scale(1.05);
    }
    &.router-link-active {
      font-weight: bold;
      color: #0d6efd;
      transform: scale(1.05);
    }
  }
}
</style>
