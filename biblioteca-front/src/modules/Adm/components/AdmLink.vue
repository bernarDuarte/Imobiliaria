<template>
  <router-link :to="to" :target="target">
    <slot />
  </router-link>
</template>

<script>
import { ADM_URL } from '@/modules/Adm/adm.constans';

export default {
  name: 'BibliotecaAdmLink',
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
        name: ADM_URL[this.action].name,
        path: ADM_URL[this.action].path,
        params: {
          id: this.id,
        },
      };
    },
  },
};
</script>
