<template>
    <div class="flex justify-center items-center flex-col">
        <form @submit.prevent="resent_Email"
            class="flex flex-col bg-sky-950 email-sent justify-center items-center space-y-5 rounded-3xl mt-60">
            <label for="resent-password" class='text-slate-50 font-fontWow font-bold'>Digite seu e-mail para
                recuperação</label>
            <input type="email" class="w-64 h-10 rounded-md" v-model="Password_Resent" required>
            <button type="submit"
                class="text-slate-50 bg-zinc-500 w-24 h-10 rounded-2xl font-fontWow font-bold hover:bg-zinc-700">
                Send
            </button>
            <button class="text-slate-50 bg-sky-700 w-24 h-10 rounded-2xl font-fontWow font-bold hover:bg-sky-900"
                @click="backtoLogin">
                Back
            </button>
        </form>
    </div>
</template>

<script>
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
export default {
    name: 'Recovery',
    data() {
        return {
            Password_Resent: ''
        }

    },
    methods: {
         async resent_Email() {
            const auth = getAuth();
            sendPasswordResetEmail(auth, this.Password_Resent)
                .then(() => {
                    console.log('Email Enviado')
                    alert('Verifique seu e-mail para efetuar a mudança de senha.')
                    this.$router.push('/login')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    console.log(error)
                    alert('O e-mail não foi encontrado no sistema. Porfavor registre-se')
                    this.$router.push('/register')
                });
        },
        backtoLogin() {
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>
.email-sent {
    width: 600px;
    height: 300px;
}
</style>