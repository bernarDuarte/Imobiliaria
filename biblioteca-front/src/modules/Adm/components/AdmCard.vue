<template>
  <biblioteca-row>
    <biblioteca-col
      :sm="4"
      :md="2">
      <biblioteca-icon
        class="mt-2"
        size="xl"
        icon="person" />
    </biblioteca-col>
    <biblioteca-col
      :sm="20"
      :md="22">
      <biblioteca-header v-truncate size="sm">
        <biblioteca-adm-link :id="adm.id">{{ adm.nome }}</biblioteca-adm-link>
      </biblioteca-header>
      <biblioteca-p
        v-truncate="2"
        color="regular">
        {{ adm.email }}
      </biblioteca-p>
    </biblioteca-col>
  </biblioteca-row>
</template>

<script>

import BibliotecaAdmLink from '@/modules/Adm/components/AdmLink.vue';

export default {
  name: 'AdmCard',
  components: {
    BibliotecaAdmLink,
  },
  props: {
    adm: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  computed: {
  },
};
</script>
