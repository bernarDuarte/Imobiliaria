<template>
  <biblioteca-single-content-layout container-size="lg">
    <template #content>
      <biblioteca-header v-if="isEditing">
        Editar Tipo Imovel
      </biblioteca-header>
      <biblioteca-header v-else>
        Criar Tipo Imovel
      </biblioteca-header>
      <biblioteca-tipoimovel-edit-inputs @save="saveTipoImovel" />
    </template>
  </biblioteca-single-content-layout>
</template>
<script>

import { toastError } from '@/services/toastService';
import { TIPOIMOVEL_ERRORS } from '@/modules/tipoImovel/tipoImovel.constants';
// eslint-disable-next-line import/no-cycle
import { goToOpenTipoImovel, goToTipoImovelNotFound } from '@/modules/tipoImovel/tipoImovel.routes';
import BibliotecaTipoimovelEditInputs from '@/modules/tipoImovel/components/TipoImovelEditInputs.vue';
import BibliotecaSingleContentLayout from '@/layouts/SingleContentLayout.vue';

import { createTipoImovel, getTipoImovel } from '@/modules/tipoImovel/tipoImovel.service';

export default {
  name: 'BibliotecaTipoImovelEditPage',
  components: {
    BibliotecaTipoimovelEditInputs,
    BibliotecaSingleContentLayout,
  },
  provide() {
    const TipoImovelEditVm = {};
    Object.defineProperty(TipoImovelEditVm, 'tipoImovel', {
      get: () => this.tipoImovel,
    });
    return { TipoImovelEditVm };
  },
  data() {
    return {
      tipoImovel: null,
    };
  },
  computed: {
    id() {
      return this.$route.params?.id;
    },
    isEditing() {
      return !!this.tipoImovel?.id;
    },
  },
  mounted() {
    if (this.id) {
      this.fetchTipoImovel();
    } else {
      this.tipoImovel = {};
    }
  },
  methods: {
    fetchTipoImovel() {
      getTipoImovel(this.id)
        .then(data => {
          this.tipoImovel = data.data;
        })
        .catch(err => {
          this.tipoImovel = null;
          if (err) {
            goToTipoImovelNotFound(this.$router);
          } else if ((err.response.data.errors === TIPOIMOVEL_ERRORS[err.response.status] && err.response.status === 404)) {
            goToTipoImovelNotFound(this.$router);
          } else {
            toastError('Erro ao buscar o tipo de imovel');
          }
        });
    },
    saveTipoImovel() {
      createTipoImovel(this.tipoImovel)
        .then(data => {
          goToOpenTipoImovel(this.$router, data || this.tipoImovel);
        })
        .catch(() => toastError('Erro ao salvar o tipo de imovel'));
    },
  },
};
</script>
