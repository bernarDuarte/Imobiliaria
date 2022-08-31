import { translate } from '@/services/toastService';

export default {
  install(Vue) {
    Vue.prototype.$t = term => translate(term);
  },
};
