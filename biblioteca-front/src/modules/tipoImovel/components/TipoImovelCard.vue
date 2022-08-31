<template>
  <biblioteca-row>
    <biblioteca-col
      :sm="4"
      :md="2">
      <biblioteca-icon
        class="mt-2"
        size="xl"
        icon="book" />
    </biblioteca-col>
    <biblioteca-col
      :sm="20"
      :md="22">
      <biblioteca-header v-truncate size="sm">
        <biblioteca-tipo-imovel-link :id="tipoImovel.id">{{ tipoImovel.nome }}</biblioteca-tipo-imovel-link>
      </biblioteca-header>
    </biblioteca-col>
  </biblioteca-row>
</template>

<script>
import BibliotecaTipoImovelLink from '@/modules/tipoImovel/components/TipoImovelLink.vue';

export default {
  name: 'TipoImovelListItem',
  components: {
    BibliotecaTipoImovelLink,
  },
  props: {
    tipoImovel: {
      type: Object,
      required: true,
    },
  },
};
</script>
