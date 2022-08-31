import { GERENCIAR_URL } from '@/modules/gerenciar/gerenciar.constants';

export default [
  {
    ...GERENCIAR_URL.imovel,
    component: () => import('@/modules/gerenciar/views/GerenciarImoveis.vue'),
  },
  {
    ...GERENCIAR_URL.tipoImovel,
    component: () => import('@/modules/gerenciar/views/GerenciarTipoImovel.vue'),
  },
  {
    ...GERENCIAR_URL.adms,
    component: () => import('@/modules/gerenciar/views/GerenciarAdm.vue'),
  },
];

export function goToImovel($router) {
  $router.push({
    name: GERENCIAR_URL.imovel.name,
  });
}

export function goToTipoImovel($router) {
  $router.push({
    name: GERENCIAR_URL.tipoImovel.name,
  });
}

export function goToAdm($router) {
  $router.push({
    name: GERENCIAR_URL.adms.name,
  });
}
