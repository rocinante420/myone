// import { createRouter,createWebHashHistory } from "vue-router";
// const router=createRouter({
//     history:createWebHashHistory(),
//     routes:[
//         {path:'/home',name:'home',component:()=>import('./components/home.vue')},
//         {path:'/about',name:'about',component:()=>import('./components/about.vue')},
//         children,[
//             {path:'tab1',component:()=>import('./components/page/tab1.vue')},
//             {path:'tab2',component:()=>import('./components/page/tab2.vue')}
//         ]
//     ]
// })
// export default router
import { createRouter,createWebHashHistory } from "vue-router";
//创建前段路由规则
const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/home',component:()=>import('./components/home.vue')},
        //{path:'/test',component:()=>import('./components/test.vue')},
        //关于页面路由
        {path:'/about',component:()=>import('./components/about.vue'),
            children:[
                {path:'tab1',component:()=>import('./components/page/tab1.vue')},
                {path:'tab2',component:()=>import('./components/page/tab2.vue')},
            ]   
        },
        //创建路由的嵌套规则，给关于组件加入子路由
        
    ]
})
export default router//导出路由规则