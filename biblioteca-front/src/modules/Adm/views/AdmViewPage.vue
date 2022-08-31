<template>
  <biblioteca-single-content-layout container-size="lg">
    <template v-if="adm" #content>
      <biblioteca-row class="d-flex align-items-center">
        <biblioteca-col>
          <biblioteca-header>
            {{ adm.nome }}
          </biblioteca-header>
        </biblioteca-col>
      </biblioteca-row>
      <biblioteca-row>
        <biblioteca-col>
          <biblioteca-p class="biblioteca-u-text--medium">
            {{ adm.email }}
          </biblioteca-p>
        </biblioteca-col>
      </biblioteca-row>
    </template>
  </biblioteca-single-content-layout>
</template>

<script>

import { ADM_ERRORS } from '@/modules/Adm/adm.constans';
// eslint-disable-next-line import/no-cycle
import { goToAdmNotFound } from '@/modules/Adm/adm.routes';
import { toastError } from '@/services/toastService';
import { getAdm } from '@/modules/Adm/adm.service';
import BibliotecaSingleContentLayout from '@/layouts/SingleContentLayout.vue';

export default {
  name: 'BibliotecaadmViewPage',
  components: {
    BibliotecaSingleContentLayout,
  },
  data() {
    return {
      adm: null,
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
      getAdm(this.id)
        .then(data => {
          this.adm = data.data;
        })
        .catch(err => {
          this.livro = null;
          if (err) {
            goToAdmNotFound(this.$router);
          } else if ((err.response.data.errors === ADM_ERRORS[err.response.status] && err.response.status === 404)) {
            goToAdmNotFound(this.$router);
          } else {
            toastError('Erro ao buscar o Administrador');
          }
        });
    },
  },
};
</script>
