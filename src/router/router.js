import Main from "@/views/Main.vue";
import parentView from "@/components/parent-view";

export const mainRouter = {
  path: "/",
  name: "mainRouter",
  redirect: "/home",
  component: Main,
  children: [
    {
      path: "home",
      name: "home",
      meta: {
        title: "首页",
        access: true
      },
      component: () => import("@/views/home/home.vue")
    },
    // 详情
      {
        path: "detail/:id",
        name: "detail",
        component: () => import("@/views/detail/detail.vue")
      },
      // 快讯详情
        {
          path: "news_detail/:id",
          name: "news_detail",
          component: () => import("@/views/detail/news.vue")
        },
        // 热点资讯
          {
            path: "hot/:id",
            name: "hot",
            component: () => import("@/views/detail/hot.vue")
          },
  ]
};
export const MenuRouter = [
    // 精品域名
    {
      path: "boutique",
      redirect: "/boutique",
      component: Main,
      children: [
        {
          path: "index",
          name: "boutique",
          component: () => import("@/views/boutique/boutique.vue")
        }
      ]
    },
    // 平价域名
    {
      path: "flat",
      redirect: "/flat",
      component: Main,
      children: [
        {
          path: "index",
          name: "flat",
          component: () => import("@/views/flat/flat.vue")
        }
      ]
    },
    // 咨询
    {
      path: "consult",
      redirect: "/consult",
      component: Main,
      children: [
        {
          path: "index",
          name: "consult",
          component: () => import("@/views/consult/consult.vue")
        }
      ]
    },
    // 快讯
    {
      path: "latest",
      redirect: "/latest",
      component: Main,
      children: [
        {
          path: "index",
          name: "latest",
          component: () => import("@/views/latest/latest.vue")
        }
      ]
    },
    // 新闻
    {
      path: "news",
      redirect: "/news",
      component: Main,
      children: [
        {
          path: "index",
          name: "news",
          component: () => import("@/views/news/news.vue")
        }
      ]
    },
];
export const routers = [mainRouter, ...MenuRouter];
