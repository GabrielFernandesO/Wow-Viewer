<template>
  <div class="login flex  absolute right-0 top-18 justify-center">
    <div v-if="loading" class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <span class="loading "></span>
    </div>
    <section class="flex justify-center items-center">
      <form @submit.prevent="login()" class="flex flex-col bg-sky-900 form-login  items-center space-y-10">
        <div class="flex flex-col mt-52 space-y-2">
          <label for="email" class='text-slate-50 font-fontWow font-bold'>Email:</label>
          <input type="email" name="email" class="input-size rounded-2xl" placeholder="example@example.com"
            v-model='email' required />
        </div>
        <div class="flex flex-col space-y-2">
          <label for="password" class='text-slate-50 font-fontWow font-bold'>Password:</label>
          <input type="password" name="password" class="input-size rounded-2xl" placeholder="Type your password"
            v-model='password' required />
        </div>
        <a href="/recovery" class='ml-5 text-slate-50 underline font-fontWow font-bold'> Forgot your password?</a>
        <button type="submit"
          class='text-slate-50 bg-zinc-500 w-32 h-12 rounded-2xl font-fontWow font-bold hover:bg-zinc-700'>Login</button>
      </form>
    </section>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'


export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  methods: {
    async login() {
      this.loading = true
      const auth = getAuth()
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            console.log('Logou');
            const userLogged = userCredential.user
            localStorage.setItem('Logged', userLogged)
            console.log(userLogged)
            console.log('NOME:', userLogged.displayName)
            this.$router.push('/profile');

          })
      }
      catch (error) {
        if (error.code === 'auth/invalid-email') {
          alert('O email informado não é registrado!')
        } else {
          alert('Senha incorreta, tente novamente')
        }
      }
      this.loading = false
    },
  }
}


</script>

<style scoped> .loading {
   width: 60px;
   height: 60px;
   background-color: transparent;
   display: block;
   border: 12px solid rgb(23 37 84);
   border-top: 12px solid transparent;
   border-radius: 50%;
   animation: loading 1s linear infinite;
 }

 @keyframes loading {
   0% {
     transform: rotate(0deg);
   }

   100% {
     transform: rotate(360deg)
   }
 }


 .absolute {
   position: absolute;
 }

 .inset-0 {
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
 }

 .form-login {
   width: 400px;
   height: 850px
 }

 .input-size {
   width: 300px;
   height: 50px
 }
</style>
