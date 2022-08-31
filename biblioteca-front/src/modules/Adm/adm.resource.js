import { get, put, post, remove } from '@/helpers/http';

const BASE_PATH = 'administradores';

export function fetchAdm() {
  return get(`${BASE_PATH}`);
}

export function getAdm(id) {
  return get(`/${BASE_PATH}/${id}`);
}

export function updateAdm(adm) {
  return put(`/${BASE_PATH}/${adm.id}`, adm);
}

export function createAdm(adm) {
  return post(`${BASE_PATH}`, adm);
}

export function removeAdm(adm) {
  return remove(`/${BASE_PATH}/${adm.id}`);
}
