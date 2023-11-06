<template>
    <div class="register">
        <section class="flex justify-center items-center">
            <form @submit.prevent="register" class="flex flex-col bg-sky-900 form-login items-center space-y-6">
                <div class="flex flex-col mt-10 space-y-2">
                    <label for="username" class="text-slate-50 font-fontWow font-bold">Username:</label>
                    <input type="text" name="username" class="input-size rounded-2xl" placeholder="Type you username"
                        v-model="username" required />
                </div>
                <div class="flex flex-col  space-y-2">
                    <label for="email" class="text-slate-50 font-fontWow font-bold">Email:</label>
                    <input type="email" name="email" class="input-size rounded-2xl" placeholder="example@example.com"
                        v-model="email" required />
                </div>
                <div class="flex flex-col  space-y-2">
                    <label for="repeat-email" class="text-slate-50 font-fontWow font-bold">Confirm email:</label>
                    <input type="email" name="repeat-email" class="input-size rounded-2xl" placeholder="example@example.com"
                        v-model="ConfirmEmail" required />
                </div>
                <div class="flex flex-col space-y-2">
                    <label for="password" class="text-slate-50 font-fontWow font-bold">Password:</label>
                    <input type="password" name="password" class="input-size rounded-2xl" placeholder="Type your password"
                        v-model="password" required />
                </div>
                <div class="flex flex-col space-y-2">
                    <label for="confirm-password" class="text-slate-50 font-fontWow font-bold">Confirm password:</label>
                    <input type="password" name="confirm-password" class="input-size rounded-2xl"
                        placeholder="Type your password" v-model="ConfirmPassword" required />
                </div>
                <div class="flex flex-col space-y-2">
                    <label for="URL-image" class="text-slate-50 font-fontWow font-bold">URL Image:</label>
                    <input type="url" name="URL-image" class="input-size rounded-2xl" placeholder="Type URL IMAGE"
                        v-model="picture" required />
                </div>
                <div class="flex flex-col space-y-5">
                    <button type="submit"
                        class="text-slate-50 bg-zinc-500 w-32 h-12 rounded-2xl hover:bg-zinc-700 font-fontWow font-bold">
                        Register
                    </button>
                    <button class="text-slate-50 bg-sky-700  w-32 h-12 rounded-2xl hover:bg-sky-950 font-fontWow font-bold"
                        @click="backToLogin">
                        Back
                    </button>
                </div>


            </form>

        </section>
    </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export default {
    name: 'Register',
    data() {
        return {
            username: '',
            email: '',
            password: '',
            picture: '',
            ConfirmEmail: '',
            ConfirmPassword: '',
            ErrorForm: {
                usernameError: '',
                emailError: '',
                confirmemailError: '',
                passwordError: '',
                confirmpasswordError: '',
                pictureError: ''
            }

        }
    },
    methods: {
        async register() {
            if(!this.Validation()){
                //Error Validation
                alert('Dados incorretos, verifique e tente novamente! Usuário deverá possuir mais de 3 letras, senhas e emails iguais e um link para imagem')
                return
            }

            const auth = getAuth()
            try {
                await createUserWithEmailAndPassword(auth, this.email, this.password)
                    .then((userCredential) => {
                        alert("Cadastro concluído! aperte ok para ser redirecionado a pagina de login");
                        const user = userCredential.user
                        console.log(user)
                        //Apos criar ja da update com os dados inseridos no proprio register
                        updateProfile(auth.currentUser, {
                            displayName: this.username, photoURL: this.picture
                        })
                            .then(() => {
                                console.log('Perfil Ja atualizado')
                                this.$router.push('/login')
                            })
                    })
            } catch (error) {
                if(error.code === 'auth/email-already-in-use'){
                    alert('Email já cadastrado, tente outro')
                }
                console.error('Erro ao cadastrar usuário:', error);
            }
        },
        backToLogin() {
            this.$router.push('/login')
        },
        Validation() {
            this.ErrorForm.usernameError = this.username.length < 3 ? false : true;
            this.ErrorForm.emailError = this.email === '' ? false : true;
            this.ErrorForm.passwordError = this.password.length < 6 ? false : true;
            this.ErrorForm.pictureError = this.picture === '' ? false : true;

            console.log('Retornou?', this.ErrorForm.usernameError)
            console.log(this.ErrorForm.emailError)
            console.log(this.ErrorForm.passwordError)
            console.log(this.ErrorForm.pictureError)
            
            

            if (this.password === this.ConfirmPassword) {
                this.ErrorForm.confirmpasswordError = true

            } else {
                this.ErrorForm.confirmpasswordError = false
            }
            
            if (this.email === this.ConfirmEmail) {
                this.ErrorForm.confirmemailError = true
            } else {
                this.ErrorForm.confirmemailError = false
            }
            console.log(this.ErrorForm.confirmpasswordError)
            console.log(this.ErrorForm.confirmemailError)
            if (
                this.ErrorForm.usernameError &&
                this.ErrorForm.emailError &&
                this.ErrorForm.passwordError &&
                this.ErrorForm.pictureError &&
                this.ErrorForm.confirmpasswordError &&
                this.ErrorForm.confirmemailError 
            ) {
                return true

            }

            return false



        }
    }
}

</script>

<style scoped> .form-login {
     width: 450px;
     height: 850px
 }

 .input-size {
     width: 300px;
     height: 50px
 }</style>