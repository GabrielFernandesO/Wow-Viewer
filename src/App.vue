<template>
  <!-- AQUI TEMOS CLASS DINAMICA -->
  <div :class="pageBackgroundClass">
    <NavBar></NavBar>
    <RouterView />
    <Footer class="fixed bottom-0 w-full"></Footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

/* TEM QUE IMPORTAR ESSAS PROPRIEDADES
COMPUTED CALCULA E RECALCULA PELO CHACHE DA PAGINA MUITO UTIL E DINAMICO
USEROUTE PARA VER A ROTA ATUAL. */
export default {
  name: 'App',
  computed: {
    pageBackgroundClass() {
      if (this.$route.path === '/register') {
        return 'bg-register w-screen h-screen bg-cover';
      } else {
        // Caso contrário, retorna a classe 'bg-lich'
        return 'bg-lich w-screen h-screen bg-cover';
      }
    }
  },
  components: {
    NavBar,
    Footer
  }
}

</script>

<style>
/* Estilos de background */
.bg-lich {
  background: url('/imgs/bg-page.jpg');
  /* Cor do background padrão */
}

.bg-register {
  background: url('/imgs/bg-register.jpg');
  /* Cor do background para a rota '/register' */
}
</style>
