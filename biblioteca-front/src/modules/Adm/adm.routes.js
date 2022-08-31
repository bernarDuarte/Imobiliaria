import { ADM_URL } from '@/modules/Adm/adm.constans';
import { createEmptyComponent } from '@/router/route.service';

export default [
  {
    path: ADM_URL.path,
    redirect: '/',
    component: { render: createEmptyComponent },
    children: [
      {
        ...ADM_URL.view,
        component: () => import('@/modules/Adm/views/AdmViewPage.vue'),
      },
      {
        ...ADM_URL.edit,
        component: () => import('@/modules/Adm/views/AdmEditPage.vue'),
      },
      {
        ...ADM_URL.create,
        component: () => import('@/modules/Adm/views/AdmEditPage.vue'),
      },
      {
        ...ADM_URL.notfound,
        component: () => import('@/modules/Adm/views/AdmNotFound.vue'),
      },
    ],
  },
];

export function goToAdmNotFound($router) {
  $router.push({
    name: ADM_URL.notfound.name,
  });
}

export function goToOpenAdm($router, Adm) {
  $router.push({
    name: ADM_URL.view.name,
    params: { id: Adm.id },
  });
}

export function goToCreateAdm($router) {
  $router.push({
    name: ADM_URL.create.name,
  });
}
