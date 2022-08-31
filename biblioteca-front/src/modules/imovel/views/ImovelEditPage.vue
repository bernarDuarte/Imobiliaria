<template>
  <biblioteca-single-content-layout container-size="lg">
    <template #content>
      <biblioteca-header v-if="isEditing">
        Editar Imovel
      </biblioteca-header>
      <biblioteca-header v-else>
        Criar Imovel
      </biblioteca-header>
      <biblioteca-livro-edit-inputs @save="saveImovel" />
    </template>
  </biblioteca-single-content-layout>
</template>

<script>
import { toastError } from '@/services/toastService';
import { IMOVEL_ERRORS } from '@/modules/imovel/imovel.constants';
// eslint-disable-next-line import/no-cycle
import { goToOpenImovel, goToImovelNotFound } from '@/modules/imovel/imovel.routes';
import { saveImovel, getImovel } from '@/modules/imovel/imovel.service';

import BibliotecaLivroEditInputs from '@/modules/imovel/components/ImovelEditInputs.vue';
import BibliotecaSingleContentLayout from '@/layouts/SingleContentLayout.vue';

export default {
  name: 'BibliotecaLivroEditPage',
  components: {
    BibliotecaLivroEditInputs,
    BibliotecaSingleContentLayout,
  },
  provide() {
    const imovelEditVm = {};
    Object.defineProperty(imovelEditVm, 'imovel', {
      get: () => this.imovel,
    });
    return { imovelEditVm };
  },
  data() {
    return {
      imovel: null,
    };
  },
  computed: {
    id() {
      return this.$route.params?.id;
    },
    isEditing() {
      return !!this.imovel?.id;
    },
  },
  mounted() {
    if (this.id) {
      this.fetchImovel();
    } else {
      this.imovel = {};
    }
  },
  methods: {
    fetchImovel() {
      getImovel(this.id)
        .then(data => {
          this.imovel = data.data;
        })
        .catch(err => {
          this.imovel = null;
          if (err) {
            goToImovelNotFound(this.$router);
          } else if ((err.response.data.errors === IMOVEL_ERRORS[err.response.status] && err.response.status === 404)) {
            goToImovelNotFound(this.$router);
          } else {
            toastError('Erro ao buscar o imovel');
          }
        });
    },
    saveImovel() {
      saveImovel(this.imovel)
        .then(data => {
          goToOpenImovel(this.$router, data || this.imovel);
        })
        .catch(() => toastError('Erro ao salvar o imovel'));
    },
  },
};
</script>
