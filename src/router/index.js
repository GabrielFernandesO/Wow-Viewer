import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Home.vue'
import Login from '../Pages/Login.vue'
import Register from '../Pages/Register.vue'
import Profile from '../Pages/Profile.vue'
import Classes from '../Pages/Classes.vue'
import Recovery from '../Pages/Recovery.vue'



const router = createRouter({
  history: createWebHistory(import.meta.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/classes',
      name: 'classes',
      component: Classes,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/recovery',
      name: 'recovery',
      component: Recovery,
    }


  ]
})

//Route Guard
router.beforeEach((to, from, next) => {
  const Logged = localStorage.getItem("Logged");
  if(to.meta.requiresAuth && Logged === null){
    next("/login");
  }
    else if (!to.meta.requiresAuth && Logged !== null) {
      next("/profile");
  } else {
      next();
  }
});





export default router

