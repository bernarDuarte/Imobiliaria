<template>
  <biblioteca-single-content-layout container-size="lg">
    <template v-if="tipoImovel" #content>
      <biblioteca-row class="d-flex align-items-center">
        <biblioteca-col>
          <biblioteca-header>
            {{ tipoImovel.nome }}
          </biblioteca-header>
        </biblioteca-col>
      </biblioteca-row>
    </template>
  </biblioteca-single-content-layout>
</template>

<script>
import { TIPOIMOVEL_ERRORS } from '@/modules/tipoImovel/tipoImovel.constants';
import { getTipoImovel } from '@/modules/tipoImovel/tipoImovel.service';
import { toastError } from '@/services/toastService';
// eslint-disable-next-line import/no-cycle
import { goToTipoImovelNotFound } from '@/modules/tipoImovel/tipoImovel.routes';
import BibliotecaSingleContentLayout from '@/layouts/SingleContentLayout.vue';

export default {
  name: 'TipoImovelViewPage',
  components: {
    BibliotecaSingleContentLayout,
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
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      getTipoImovel(this.id)
        .then(({ data }) => {
          this.tipoImovel = data;
        })
        .catch(err => {
          this.tipoImovel = null;
          if (err) {
            goToTipoImovelNotFound(this.$router);
          } else if ((err.response.data.errors === TIPOIMOVEL_ERRORS[err.response.status] && err.response.status === 404)) {
            goToTipoImovelNotFound(this.$router);
          } else {
            toastError('Erro ao buscar o tipo Imovel');
          }
        });
    },
  },
};
</script>
