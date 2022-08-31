import { TIPOIMOVEL_URL } from '@/modules/tipoImovel/tipoImovel.constants';
import { createEmptyComponent } from '@/router/route.service';

export default [
  {
    path: TIPOIMOVEL_URL.path,
    redirect: '/',
    component: { render: createEmptyComponent },
    children: [
      {
        ...TIPOIMOVEL_URL.view,
        component: () => import('@/modules/tipoImovel/views/tipoImovelView.vue'),
      },
      {
        ...TIPOIMOVEL_URL.edit,
        component: () => import('@/modules/tipoImovel/views/tipoImovelEditPage.vue'),
      },
      {
        ...TIPOIMOVEL_URL.create,
        component: () => import('@/modules/tipoImovel/views/tipoImovelEditPage.vue'),
      },
      {
        ...TIPOIMOVEL_URL.notfound,
        component: () => import('@/modules/tipoImovel/views/tipoImovelNotFound.vue'),
      },
    ],
  },
];

export function goToTipoImovelNotFound($router) {
  $router.push({
    name: TIPOIMOVEL_URL.notfound.name,
  });
}

export function goToOpenTipoImovel($router, tipoImovel) {
  $router.push({
    name: TIPOIMOVEL_URL.view.name,
    params: { id: tipoImovel.id },
  });
}

export function goToCreateTipoImovel($router) {
  $router.push({
    name: TIPOIMOVEL_URL.create.name,
  });
}
