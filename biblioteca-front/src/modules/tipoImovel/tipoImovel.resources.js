import { get, post, put, remove } from '@/helpers/http';

const BASE_PATH = 'tipos-imoveis';

export function fetchTipoImovel() {
  return get(`${BASE_PATH}`);
}

export function getTipoImovel(tipoImovelId) {
  return get(`${BASE_PATH}/${tipoImovelId}`);
}

export function createTipoImovel(tipoImovel) {
  return post(`${BASE_PATH}`, { ...tipoImovel });
}

export function updateTipoImovel(tipoImovel) {
  return put(`${BASE_PATH}/${tipoImovel.id}`, tipoImovel);
}

export function removeTipoImovel(tipoImovel) {
  return remove(`${BASE_PATH}/${tipoImovel.id}`);
}
