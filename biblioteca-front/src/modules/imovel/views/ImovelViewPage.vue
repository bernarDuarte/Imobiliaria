<template>
  <biblioteca-single-content-layout container-size="lg">
    <template v-if="imovel" #content>
      <biblioteca-row class="d-flex align-items-center">
        <biblioteca-col>
          <biblioteca-header>
            {{ imovel.titulo }}
          </biblioteca-header>
        </biblioteca-col>
      </biblioteca-row>
      <biblioteca-row class="mt-1">
        <biblioteca-col>
          <biblioteca-p class="biblioteca-u-text--medium">
            {{ imovel.descricao }}
          </biblioteca-p>
        </biblioteca-col>
      </biblioteca-row>
    </template>
  </biblioteca-single-content-layout>
</template>

<script>
import { IMOVEL_ERRORS } from '@/modules/imovel/imovel.constants';
import { getImovel } from '@/modules/imovel/imovel.service';
import { toastError } from '@/services/toastService';
// eslint-disable-next-line import/no-cycle
import { goToImovelNotFound } from '@/modules/imovel/imovel.routes';
import BibliotecaSingleContentLayout from '@/layouts/SingleContentLayout.vue';

export default {
  name: 'LivroViewPage',
  components: {
    BibliotecaSingleContentLayout,
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
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      getImovel(this.id)
        .then(({ data }) => {
          this.imovel = data;
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
  },
};
</script>
