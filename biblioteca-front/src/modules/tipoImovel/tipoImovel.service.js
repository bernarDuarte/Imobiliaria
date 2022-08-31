import * as tipoImovelResource from '@/modules/tipoImovel/tipoImovel.resources';

export function fetchTipoImovel() {
  return new Promise((resolve, reject) =>
    tipoImovelResource
      .fetchTipoImovel()
      .then(({ data }) => {
        resolve({
          data,
        });
      })
      .catch(err => reject(err)));
}

export function getTipoImovel(id) {
  return new Promise((resolve, reject) =>
    tipoImovelResource
      .getTipoImovel(id)
      .then(({ data }) => {
        if (!data) {
          reject(new Error('not_found'));
        }
        resolve({ data });
      })
      .catch(err => reject(err)));
}

export function saveTipoImovel(tipoImovel) {
  const errors = null;
  return new Promise((resolve, reject) =>
    (errors ? reject(errors) : getTipoImovelSaveAction(tipoImovel)(tipoImovel)
      .then(({ data }) => resolve(data))
      .catch(err => reject(err))));
}

export function createTipoImovel(tipoImovel) {
  return new Promise((resolve, reject) =>
    tipoImovelResource
      .createTipoImovel(tipoImovel)
      .then(({ data }) => {
        resolve(data);
      })
      .catch(err => reject(err)));
}

export function updateTipoImovel(tipoImovel) {
  return new Promise((resolve, reject) =>
    tipoImovelResource
      .updatetipoImovel(tipoImovel)
      .then(({ data }) => {
        resolve(data);
      })
      .catch(err => reject(err)));
}

export function removeTipoImovel(tipoImovel) {
  return new Promise((resolve, reject) =>
    tipoImovelResource
      .removeTipoImovel(tipoImovel)
      .then(({ data }) => {
        resolve(data);
      })
      .catch(err => reject(err)));
}

function getTipoImovelSaveAction(tipoImovel) {
  return tipoImovel.id ? tipoImovelResource.updatetipoImovel : tipoImovelResource.createtipoImovel;
}
