export const ADM_URL = Object.freeze({
  path: '/administrador',
  view: {
    name: 'adm.view',
    path: '/administrador/ver/:id',
  },
  edit: {
    name: 'adm.edit',
    path: '/administrador/editar/:id',
  },
  create: {
    name: 'adm.create',
    path: '/administrador/criar',
  },
  notfound: {
    name: 'adm.notfound',
    path: '/administrador/nao-encontrado',
  },
});

export const ADM_ERRORS = {
  404: 'adm_NOT_FOUND',
  401: 'PERMISSION_DENIED',
};
