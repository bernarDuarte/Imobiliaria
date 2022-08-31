import * as admResource from '@/modules/Adm/adm.resource';

export function fetchAdm() {
  return new Promise((resolve, reject) =>
    admResource
      .fetchAdm()
      .then(({ data }) => {
        resolve({
          data,
        });
      })
      .catch(err => reject(err)));
}

export function getAdm(id) {
  return new Promise((resolve, reject) =>
    admResource
      .getAdm(id)
      .then(({ data }) => {
        if (!data) {
          reject(new Error('not_found'));
        }
        resolve({ data });
      })
      .catch(err => reject(err)));
}

export function saveAdm(adm) {
  const errors = null;
  return new Promise((resolve, reject) =>
    (errors ? reject(errors) : getAdmSaveAction(adm)(adm)
      .then(({ data }) => resolve(data))
      .catch(err => reject(err))));
}

export function createAdm(adm) {
  return new Promise((resolve, reject) =>
    admResource
      .createAdm(adm)
      .then(({ data }) => {
        resolve(data);
      })
      .catch(err => reject(err)));
}

export function updateAdm(adm) {
  return new Promise((resolve, reject) =>
    admResource
      .updateAdm(adm)
      .then(({ data }) => {
        resolve(data);
      })
      .catch(err => reject(err)));
}

export function removeAdm(adm) {
  return new Promise((resolve, reject) =>
    admResource
      .removeAdm(adm)
      .then(({ data }) => {
        resolve(data);
      })
      .catch(err => reject(err)));
}

function getAdmSaveAction(adm) {
  return adm.id ? admResource.updateAdm : admResource.createAdm;
}
