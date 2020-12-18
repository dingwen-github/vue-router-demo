//导入Vue和Router
import Vue from 'vue'
import Router from 'vue-router'

//引入页面
import Home from "./views/Home";
import About from "./views/About";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        // {path: '/', redirect: '/home'},
        // {path: '/',redirect: {name: 'home'}},
        // eslint-disable-next-line no-unused-vars
        {path: '/',redirect: to => {return '/home'}},
        {path: '/home', name: 'home',component: Home},
        {path: '/about',name:'about',component: About},
    ],
});
