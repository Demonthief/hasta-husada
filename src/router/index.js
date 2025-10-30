import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/Home.vue")
    },
    // {
    //     path: '/jadwalDokter',
    //     name: 'jadwal-dokter',
    //     component: () => import("../views/JadwalPoli.vue")
    // },
    {
      path: '/timMedis',
      name: 'tim-medis',
      component: () => import("../views/TimMedis.vue")
  },
    {
        path: '/tentangKami',
        name: 'tentang-kami',
        component: () => import("../views/TentangKami.vue"),
        children : [
          {
            path: '/history/:id',
            name: 'history',
            component: () => import("../components/History.vue")
          },
        ]
    },
    {
      path: '/pelayanan',
      name: 'pelayanan',
      component: () => import("../views/Pelayanan.vue")
    },
    {
      path: '/warta',
      name: 'warta',
      component: () => import("../views/Warta.vue")
    },
    {
      path: `/wartaDetail/:id`,
      name: 'warta',
      component: () => import("../views/WartaDetail.vue")
    },
    {
      path: '/pendaftaran',
      name: 'pendaftaran',
      component: () => import("../views/Pendaftaran.vue")
    },
    // {
    //   path: '/admin/login',
    //   name: 'admin-login',
    //   component: () => import("../views/LoginPage.vue")
    // },
    {
      path: '/pelayanan/gawatdarurat',
      name: 'pelayanan-gawatDarurat',
      component: () => import("../views/GawatDarurat.vue")
    },
    {
      path: '/pelayanan/obgyn',
      name: 'pelayanan-obgyn',
      component: () => import("../views/Obgyn.vue")
    },
    {
      path: '/pelayanan/farmasi',
      name: 'pelayanan-farmasi',
      component: () => import("../views/Farmasi.vue")
    },
    {
      path: '/pelayanan/rawatInap',
      name: 'pelayanan-rawatInap',
      component: () =>import("../views/Ranap.vue")
    },
    {
      path: '/pelayanan/rehabMedik',
      name: 'rehab-medik',
      component: () =>import("../views/Rehab.vue")
    },
        {
      path: '/pelayanan/detail',
      name: 'detail-pelayanan',
      component: () =>import("../views/DetailLayanan.vue")
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
})

export default router
