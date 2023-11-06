<template>
    <div class="bg-slate-600 profileData">
        <div class=" h-96 flex justify-center items-center flex-col space-y-2">
            <div class="bg-slate-50 rounded-full w-64 h-64">
                <img :src="img_profile" alt="Image-profile" class="w-64 h-64 rounded-full">
            </div>
            <div class="flex">
                <p class="flex justify-center font-fontWow font-semibold text-xl">{{ username_profile }}</p>
                <img :src="edit_Name" alt="Edit-Pencil" class=" h-8 hover:cursor-pointer hover:bg-slate-700 rounded-full "
                    @click="openFormtoChange">
            </div>

            <div v-if="tab_ToChange" class="absolute z-10 inset-0 bg-black bg-opacity-50 flex justify-center items-center">

                <form @submit.prevent="HandleChangeProfile"
                    class="bg-slate-400 space-y-10 changeForm flex  flex-col justify-center items-center rounded-2xl">
                    <img :src="close_Tab" alt=""
                        class="h-10 absolute x-close bg-red-600 rounded-md hover:cursor-pointer hover:bg-red-800"
                        @click="closeTab">
                    <div class="flex flex-col">
                        <label for="change-name" class="text-black font-fontWow font-bold">Change your account name</label>
                        <input type="text" name="change-name" class="w-64 h-8 rounded-lg" v-model="new_Name">
                    </div>
                    <div class="flex flex-col">
                        <label for="change-pic" class="text-black font-fontWow font-bold">Change your profile
                            picture</label>
                        <input type="url" name="change-pic" class="w-64 h-8 rounded-lg" v-model="new_Pic">
                    </div>
                    <button type="submit"
                        class="text-slate-50 bg-sky-700 w-24 h-10 rounded-2xl font-fontWow font-bold hover:bg-sky-900">Send</button>
                </form>
            </div>

        </div>
        <hr class="bg-slate-50">
        <h1 class="flex justify-center mt-3 font-fontWow font-bold text-2xl">Account informations</h1>
        <table class="mt-10 ml-5">
            <tbody>
                <tr>
                    <td class="font-fontWow font-semibold text-xl">Email:</td>
                    <td class="pl-5 font-fontWow font-semibold text-xl">{{ user_email }}</td>
                </tr>
                <tr>
                    <td class="font-fontWow font-semibold text-xl">Email Verificado: </td>
                    <td class="pl-5 font-fontWow font-semibold text-xl"> {{ user_emailVerify }} </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { getAuth, updateProfile } from "firebase/auth";

export default {
    name: 'Profile',
    data() {
        return {
            img_profile: '',
            username_profile: '',
            user_email: '',
            user_emailVerify: '',
            edit_Name: '/imgs/Edit-Pencil.svg',
            close_Tab: '/imgs/Close-Tab.svg',
            new_Name: '',
            new_Pic: '',
            tab_ToChange: false,
        }
    },
    mounted() {
        //Quando atualiza a pagina com f5 ja busca com get
        this.img_profile = localStorage.getItem('img_profile') || '';
        this.username_profile = localStorage.getItem('username_profile') || '';
        this.user_email = localStorage.getItem('email_profile') || '';
        this.user_emailVerify = localStorage.getItem('emailverify_profile') || '';
        this.reqDataProfile()
    },
    methods: {
        async reqDataProfile() {
            const auth = getAuth();
            const user = auth.currentUser;
            if (user !== null) {
                // The user object has basic properties such as display name, email, etc.
                this.username_profile = user.displayName;
                this.user_email = user.email;
                this.img_profile = user.photoURL;
                this.user_emailVerify = user.emailVerified;

                // The user's ID, unique to the Firebase project. Do NOT use
                // this value to authenticate with your backend server, if
                // you have one. Use User.getToken() instead.
                const uid = user.uid;
                //Quando carrega o mounted pela primeira vez ele salva no localstorage com set, nas proximas vezes ele pega com o get ja salvo. E atualiza por cima com outros perfis
                localStorage.setItem('img_profile', this.img_profile);
                localStorage.setItem('username_profile', this.username_profile);
                localStorage.setItem('email_profile', this.user_email);
                localStorage.setItem('emailverify_profile', this.user_emailVerify);
            }
        },
        async HandleChangeProfile() {
            const auth = getAuth();
            const newPIC = this.new_Pic
            const noPIC = this.img_profile
            const newName = this.new_Name
            const noName = this.username_profile

            let udpatedName = newName != '' ? newName : noName
            let photoURLToSend = newPIC !== '' ? newPIC : noPIC;

            updateProfile(auth.currentUser, {
                displayName: udpatedName, photoURL: photoURLToSend
            }).then(() => {
                alert('Sucesfully your definitions are saved!')
                localStorage.setItem('img_profile', photoURLToSend)
                localStorage.setItem('username_profile', udpatedName)
                //Chama a function novamente para atualizar os dados re-criados em cima do storage
                this.reqDataProfile()
                console.log(newPIC)
                console.log(this.img_profile)
            }).catch((error) => {
                console.log(error)
                alert('Something going wrong, try again!')
            });
        },
        closeTab() {
            this.tab_ToChange = false
        },
        openFormtoChange() {
            this.tab_ToChange = true
        }
    }
}
</script>

<style scoped>
.profileData {
    height: 850px;
}

.changeForm {
    width: 500px;
    height: 300px;
}

.x-close {
    top: 320px;
    right: 730px;
}
</style>