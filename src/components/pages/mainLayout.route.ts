import { defineAsyncComponent } from 'vue';

export default function init(routes: any[]) {
  const defaultRoute = {
    path: '/',
    component: defineAsyncComponent({
      loader: () => import('/@/components/layouts/mainLayout/MainLayout.vue')
    }),
  };

  routes.push(defaultRoute);
}