import Vue from 'vue';

const state = Vue.observable({
  adm: null,
});

export const mutations = {
  setAdm(adm) {
    state.adm = adm;
  },
};

export const getters = {
  getAdm() {
    return state.adm;
  },
};
