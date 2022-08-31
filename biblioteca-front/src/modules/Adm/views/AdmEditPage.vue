<template>
  <biblioteca-single-content-layout container-size="lg">
    <template #content>
      <biblioteca-header v-if="isEditing">
        Editar Administrador
      </biblioteca-header>
      <biblioteca-header v-else>
        Criar Administrador
      </biblioteca-header>
      <biblioteca-adm-edit-inputs @save="saveAdm" />
    </template>
  </biblioteca-single-content-layout>
</template>

<script>
import { toastError } from '@/services/toastService';
import { ADM_ERRORS } from '@/modules/Adm/adm.constans';
// eslint-disable-next-line import/no-cycle
import { goToOpenAdm, goToAdmNotFound } from '@/modules/Adm/adm.routes';
import { saveAdm, getAdm } from '@/modules/Adm/adm.service';

import BibliotecaSingleContentLayout from '@/layouts/SingleContentLayout.vue';
import BibliotecaAdmEditInputs from '@/modules/Adm/components/AdmEditInputs.vue';

export default {
  name: 'BibliotecaadmEditPage',
  components: {
    BibliotecaSingleContentLayout,
    BibliotecaAdmEditInputs,
  },
  provide() {
    const admEditVm = {};
    Object.defineProperty(admEditVm, 'adm', {
      get: () => this.adm,
    });
    return { admEditVm };
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
    isEditing() {
      return !!this.adm?.id;
    },
  },
  mounted() {
    if (this.id) {
      this.fetchadm();
    } else {
      this.adm = {};
    }
  },
  methods: {
    fetchadm() {
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
            toastError('Erro ao buscar o livro');
          }
        });
    },
    saveAdm() {
      saveAdm(this.adm)
        .then(data => {
          goToOpenAdm(this.$router, data || this.adm);
        })
        .catch(() => toastError('Erro ao salvar o usuário'));
    },
  },
};
</script>
