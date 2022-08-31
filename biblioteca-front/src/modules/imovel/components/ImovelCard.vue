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
        <biblioteca-livro-link :id="imovel.id">{{ imovel.titulo }}</biblioteca-livro-link>
      </biblioteca-header>
      <biblioteca-p
        v-truncate="2"
        color="regular">
        {{ imovel.descricao }}
      </biblioteca-p>
    </biblioteca-col>
  </biblioteca-row>
</template>

<script>
import BibliotecaLivroLink from '@/modules/imovel/components/ImovelLink.vue';

export default {
  name: 'LivroListItem',
  components: {
    BibliotecaLivroLink,
  },
  props: {
    imovel: {
      type: Object,
      required: true,
    },
  },
};
</script>
