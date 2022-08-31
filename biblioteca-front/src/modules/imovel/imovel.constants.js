export const IMOVEIS_URL = Object.freeze({
  path: '/api/imoveis',
  view: {
    name: 'imovel.view',
    path: '/api/imoveis/:id',
  },
  edit: {
    name: 'imovel.edit',
    path: '/api/imoveis/:id',
  },
  create: {
    name: 'imovel.create',
    path: '/api/imoveis',
  },
  notfound: {
    name: 'imovel.notfound',
    path: '/api/imoveis/nao-encontrado',
  },
});

export const IMOVEL_ERRORS = {
  404: 'IMOVEL_NOT_FOUND',
  401: 'PERMISSION_DENIED',
};
