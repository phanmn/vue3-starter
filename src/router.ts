import { createRouter, createWebHistory } from 'vue-router';
import mainLayoutRoute from '/@/components/pages/mainLayout.route.ts';
import authenLayoutRoute from '/@/components/pages/authenLayout.route.ts';

const routes = buildRoutes();
let router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

function buildRoutes(): any[] {
  const vueRoutes: any[] = [];
  mainLayoutRoute(vueRoutes);
  authenLayoutRoute(vueRoutes);
  // const pagesRoutes = require.context(
  //   './components/pages',
  //   true,
  //   /\.route\.ts$/,
  // );
  // const keys = pagesRoutes.keys();

  // keys.forEach((key: string) => {
  //   pagesRoutes(key).default(vueRoutes);
  // });

  return vueRoutes;
}

export default router;