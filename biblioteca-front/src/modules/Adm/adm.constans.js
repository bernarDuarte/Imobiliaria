export const ADM_URL = Object.freeze({
  path: '/api/administrador',
  view: {
    name: 'adm.view',
    path: '/api/administrador/ver/:id',
  },
  edit: {
    name: 'adm.edit',
    path: '/api/administrador/editar/:id',
  },
  create: {
    name: 'adm.create',
    path: '/api/administrador/criar',
  },
  notfound: {
    name: 'adm.notfound',
    path: '/api/administrador/nao-encontrado',
  },
});

export const ADM_ERRORS = {
  404: 'adm_NOT_FOUND',
  401: 'PERMISSION_DENIED',
};
