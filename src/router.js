//导入Vue和Router
import Vue from 'vue'
import Router from 'vue-router'

//引入页面
import Home from "./views/home/Home";
import About from "./views/about/About";
import Mine from "./views/mine/Mine";
import News from "./views/home/components/News";
import Shop from "./views/home/components/Shop";

//引入一级页面，按需导入。异步组件
const Login = () => import('./views/login/Login');
const DashBoard = () => import('./views/DashBoard');
Vue.use(Router);


// let func = (route) => {
//     return {
//         name: route.params.name,
//         subject: route.params.subject,
//         score: route.query.score,
//         rank: route.query.rank,
//     }
// }
const router = new Router({
    mode: 'history',
    routes: [
        // {path: '/', redirect: '/home'},
        // {path: '/',redirect: {name: 'home'}},
        // eslint-disable-next-line no-unused-vars
        // {
        //     path: '/', redirect: to => {
        //         return '/dashboard'
        //     }
        // },
        {path: '/', redirect: '/dashboard'},
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashBoard,
            children: [
                {path: '/dashboard', redirect: '/dashboard/home'},
                {
                    path: '/dashboard/home',
                    name: 'home',
                    component: Home,
                    children: [
                        {path: '/dashboard/home', redirect: '/dashboard/home/news'},
                        {path: 'news', name: 'news', component: News},
                        {path: 'shop', name: 'shop', component: Shop},
                    ]
                },
                {path: '/dashboard/about', name: 'about', component: About, props: {name: "dingwen", subject: "Java"},},
                {path: '/dashboard/mine/:name/:subject', name: 'mine', component: Mine, props: true,},
                // {path: '/mine/:name/:subject',name:'mine',component: Mine,props: func},
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
    ],
});

//全局路由前置守卫
router.beforeEach((to,from,next)=>{
    //to: 即将要进入的目标，路由对象
    //from: 当前导航正要离开的路由
    //next() 放行
    if(to.path !== '/login'){
        if(window.isLogin){
            next();
        }else{
            next('/login?redirect=' + to.path);
        }
    }else{
        //放行
        next();
    }
});

router.afterEach((to,from)=>{
    console.log(to, from);
});

export default router;
