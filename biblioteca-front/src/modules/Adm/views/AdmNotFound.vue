<template>
  <biblioteca-single-content-layout container-size="md">
    <template #content>
      <div class="d-flex align-items--center direction--column">
        <biblioteca-icon size="xxl" icon="question-octagon" />
        <biblioteca-header>Administrador não encontrado</biblioteca-header>
        <biblioteca-p>
          Erro ao localizar o administrador.
        </biblioteca-p>
        <br>
        <biblioteca-button theme="primary" @click="goToBasePage()">
          Retornar para Home
        </biblioteca-button>
      </div>
    </template>
  </biblioteca-single-content-layout>
</template>

<script>
import { goToBasePage } from '@/router/route.service';
import BibliotecaSingleContentLayout from '@/layouts/SingleContentLayout.vue';

export default {
  name: 'BibliotecaUsuarioNotFoundPage',
  components: {
    BibliotecaSingleContentLayout,
  },
  methods: {
    goToBasePage,
  },
};
</script>
