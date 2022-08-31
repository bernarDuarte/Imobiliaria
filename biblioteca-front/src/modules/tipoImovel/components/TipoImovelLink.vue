<template>
  <router-link :to="to" :target="target">
    <slot />
  </router-link>
</template>

<script>
import { TIPOIMOVEL_URL } from '@/modules/tipoImovel/tipoImovel.constants';

export default {
  name: 'BibliotecatipoImovelLink',
  props: {
    id: {
      type: Number,
      required: true,
    },
    target: {
      type: String,
      default: '',
    },
    action: {
      type: String,
      default: 'view',
      validator(action) {
        return action && ['view', 'edit'].includes(action);
      },
    },
  },
  computed: {
    to() {
      return {
        name: TIPOIMOVEL_URL[this.action].name,
        path: TIPOIMOVEL_URL[this.action].path,
        params: {
          id: this.id,
        },
      };
    },
  },
};
</script>
