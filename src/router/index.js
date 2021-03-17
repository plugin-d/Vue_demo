/*
 * @Author: Cris
 * @CreateTime:
 * @LastEditTime: 2021-03-17 13:26:59
 * @LastEditors: Please set LastEditors
 * @FilePath: \jsd:\项目\Vue_study\VueDemo\src\router\index.js
 */
import Vue from "vue";
// 引入Vuerouter
import VueRouter from "vue-router";

// 引用Vue组件
Vue.use(VueRouter);

// 向外暴露一个默认的Vuerouter对象
export default new VueRouter({
  // 路由数组
  routes: [
    {
      path: "",
      redirect: "/about"
    },
    {
      path: "/about",
      component: () => import("@/views/About")
    },
    {
      path: "/home",
      component: () => import("@/views/Home"),
      children: [
        {
          path: "message",
          component: () => import("@/views/Message"),
          children: [
            {
              path: "detail/:id",
              component: () => import("@/views/MessageDetail")
            }
          ]
        },
        {
          path: "news",
          component: () => import("@/views/News")
        },
        {
          path: "",
          redirect: "news"
        }
      ]
    }
  ]
});
