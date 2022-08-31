export const IMOVEIS_URL = Object.freeze({
  path: '/imoveis',
  view: {
    name: 'imovel.view',
    path: '/imoveis/:id',
  },
  edit: {
    name: 'imovel.edit',
    path: '/imoveis/:id',
  },
  create: {
    name: 'imovel.create',
    path: '/imoveis',
  },
  notfound: {
    name: 'imovel.notfound',
    path: '/imoveis/nao-encontrado',
  },
});

export const IMOVEL_ERRORS = {
  404: 'IMOVEL_NOT_FOUND',
  401: 'PERMISSION_DENIED',
};
