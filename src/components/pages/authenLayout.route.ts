import { defineAsyncComponent } from 'vue';

export default function init(routes: any[]) {
  const defaultRoute = {
    path: '/',
    component: defineAsyncComponent({
      loader: () => import('/@/components/layouts/authenLayout/AuthenLayout.vue')
    }),
    children: [
      {
        path: 'login', name: 'login', component: defineAsyncComponent({
          loader: () => import('/@/components/pages/login/LoginPage.vue'),
        })
      },
      {
        path: 'signup', name: 'signup', component: defineAsyncComponent({
          loader: () => import('/@/components/pages/signup/SignupPage.vue'),
        })
      }
    ]
  };

  routes.push(defaultRoute);
}