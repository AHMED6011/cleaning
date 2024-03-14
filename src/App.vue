<template>
  <main>
    <HeaderView />
    <RouterView />
    <FooterView />

    <div class="d-flex custom-bg justify-content-center align-items-center" v-if="loading">
      <div style="width: 4rem; height: 4rem" class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </main>
</template>

<script>
import { RouterView } from 'vue-router'
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'

export default {
  components: { RouterView, HeaderView, FooterView },
  data() {
    return {
      loading: true
    }
  },
  created() {
    setTimeout(() => {
      this.loading = false
    }, 500)
  }
}
</script>

<style lang="scss" scoped>
.custom-bg {
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  width: 100%;
  height: 100vh;
  z-index: 999;
}

[v-cloak] {
  display: none !important;
}
</style>
