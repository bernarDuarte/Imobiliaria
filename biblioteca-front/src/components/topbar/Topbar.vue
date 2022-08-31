<template>
  <biblioteca-navbar>
    <template #right>
      <div class="d-flex align-items--center">
        <biblioteca-button @click="onImovel">
          Imovel
        </biblioteca-button>
        <biblioteca-button @click="onTipoImovel">
          Tipo Imovel
        </biblioteca-button>
        <biblioteca-button @click="onAdms">
          Administradores
        </biblioteca-button>
        <biblioteca-button @click="onLogout">
          Sair
        </biblioteca-button>
      </div>
    </template>
  </biblioteca-navbar>
</template>

<script>
import { removeCookie } from '@/helpers/cookies/cookie';
import { goToLoginPage } from '@/router/route.service';
import { goToImovel, goToTipoImovel, goToAdm } from '@/modules/gerenciar/gerenciar.routes';

export default {
  name: 'BibliotecaTopbar',
  data() {
    return {
    };
  },
  methods: {
    removeCookie,
    onLogout() {
      removeCookie('session_id');
      goToLoginPage();
    },
    onImovel() {
      goToImovel(this.$router);
    },
    onTipoImovel() {
      goToTipoImovel(this.$router);
    },
    onAdms() {
      goToAdm(this.$router);
    },
  },
};
</script>
