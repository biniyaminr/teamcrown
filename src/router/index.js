import Vue from "vue";
import VueRouter from "vue-router";
// import vuetify from "./plugins/vuetify";

import Home from "../views/Home.vue";
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import NotFound from '../views/NotFound.vue';
// import { component } from "vue/types/umd";

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  // base: Process.env.BASE_URL,
  routes:[
    {
      path: '/',
      name:'home',
      component: Home
    },
    {
      path: '/about',
      name:'about',
      component: About
    },
    {
      path: '/contact',
      name:'contact',
      component: Contact
    },
    {
      path: '*',
      name:'NotFound',
      component: NotFound
    }   
   
  ]
})
