export const TIPOIMOVEL_URL = Object.freeze({
  path: '/tipoImovel',
  view: {
    name: 'tipoImovel.view',
    path: '/TipoImovel/ver/:id',
  },
  edit: {
    name: 'tipoImovel.edit',
    path: '/TipoImovel/editar/:id',
  },
  create: {
    name: 'tipoImovel.create',
    path: '/TipoImovel/criar',
  },
  notfound: {
    name: 'tipoImovel.notfound',
    path: '/TipoImovel/nao-encontrado',
  },
});

export const TIPOIMOVEL_ERRORS = {
  404: 'TIPOIMOVEL_NOT_FOUND',
  401: 'PERMISSION_DENIED',
};

export const TIPOIMOVEL_STATUS = {
  0: 'Cancelado',
  1: 'Ativo',
  2: 'Devolvido',
};
