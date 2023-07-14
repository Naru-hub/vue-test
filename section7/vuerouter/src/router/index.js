import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import BookList from "../views/BookList.vue";
import BookDetail from "@/components/BookDetail.vue";
import ItemList from "../views/ItemList.vue";
import NotFound from "@/components/NotFound.vue";
import UserInfo from "@/views/UserInfo.vue";
import UserProfile from "@/components/UserProfile.vue";
import UserPost from "@/components/UserPost.vue";
import HomeSub from "@/components/HomeSub.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    components: {
      default: HomeView,
      sub: HomeSub,
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/book",
    name: "BookList",
    component: BookList,
  },
  {
    path: "/book/:id",
    name: "Book",
    component: BookDetail,
    props: (route) => ({
      id: Number(route.params.id),
      title: route.params.title,
      content: route.params.content,
    }),
  },
  {
    path: "*",
    // redirect: "/",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/item/:id",
    name: "ItemList",
    component: ItemList,
  },
  {
    path: "/user",
    component: UserInfo,
    children: [
      {
        path: "profile",
        component: UserProfile,
      },
      {
        path: "post",
        component: UserPost,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
