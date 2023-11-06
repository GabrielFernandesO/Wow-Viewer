<template>
  <nav id="nav-bar" class="bg-sky-950 h-14 flex justify-end items-center space-x-4">
    <RouterLink v-if="NotLoggedBar" to="/" class="text-slate-50 hover:text-gray-400 font-fontWow font-bold">Home</RouterLink>
    <RouterLink v-if="NotLoggedBar" to="/login" class="text-slate-50 hover:text-gray-400 font-fontWow font-bold">Login</RouterLink>
    <RouterLink v-if="NotLoggedBar" to="/register" class="text-slate-50 hover:text-gray-400 pr-3 font-fontWow font-bold">Register</RouterLink>
    <RouterLink v-if="LoggedBar" to="/classes" class="text-slate-50 hover:text-gray-400 pr-2 font-fontWow font-bold">Classes</RouterLink>
    <RouterLink v-if="LoggedBar" to="/profile" class="text-slate-50 hover:text-gray-400 pr-2 font-fontWow font-bold">Profile</RouterLink>
    <div v-if="LoggedBar" @click='logout' class="text-slate-50 hover:text-gray-400 pr-3 pl-2 hover:cursor-pointer font-fontWow font-bold">Logout</div>
  </nav>
</template>

<script>
import { getAuth, signOut } from 'firebase/auth'

export default {
  name: 'NavBar',
  data() {
    return {
      loggedIn: null
    }
  },
  computed: {
    LoggedBar(){
      if (this.$route.path ==='/profile' || this.$route.path === '/classes'){
        return true
      }else{
        false
      }
    },
    NotLoggedBar() {
      if (this.$route.path === '/' || this.$route.path === '/login' || this.$route.path === '/register') {
        return true
      } else {
        false
      }
    }


  },
  methods: {
    async logout() {
      const auth = getAuth();
      signOut(auth).then(() => {
        this.$router.push('/login')
        this.loggedIn = false
        console.log('Deslogado')
        localStorage.removeItem('Logged')
      })
    },
  }
}
</script>