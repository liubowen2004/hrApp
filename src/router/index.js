import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"
import { getToken } from "../api/auth"
import axios from "axios"
import store from "@/store"
Vue.use(VueRouter)
store.dispatch("muenList/getpermission")
const Dashboard = {
  path: "/dashboard",
	meta:{
		title:'首页'
	},
  component: () => import("../views/dashboard.vue")
}
const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/login",
    component: HomeView
  },
  {
    path: "/about",
    name: "about",
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
				name:'dashboard',
				meta:{
					title:'首页'
				},
        component: () => import("../views/dashboard.vue")
      }
    ],
    component: () => import("../layout/AboutView.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/common/login.vue")
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, form, next) => {
  setTimeout(() => {
    let initDynamic = store.state.muenList.newList
    let Dynamic = []
    initDynamic.forEach((childRoute) => {
      let item = {
        path: "/"+childRoute.code,
        name: childRoute.code,
        component: () => import(`../views/${childRoute.code}/index.vue`),
        meta: {
          title: childRoute.name
        }
      }
      router.addRoute("about", item)
      Dynamic.push(item)
    })
    Dynamic.unshift(Dashboard)
    localStorage.setItem("Route", JSON.stringify(Dynamic))
  }, 1500)
  next()
})

export default router
