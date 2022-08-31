<template>
  <div>
    <biblioteca-form v-if="TipoImovelEditVm.tipoImovel" :submit="save">
      <div class="form-field mt-4">
        <biblioteca-input
          v-model="TipoImovelEditVm.tipoImovel.nome"
          label="Nome*"
          name="nome"
          type="text"
          rules="required|min:2"
          placeholder="nome" />
      </div>

      <div class="mt-4 mb-3 d--flex justify-content-end">
        <biblioteca-button
          class="btn btn-secondary"
          width="110"
          size="sm"
          @click="goHistoryBack()">
          Cancelar
        </biblioteca-button>
        <biblioteca-button
          native-type="submit"
          class="btn btn-success ms-2"
          width="110"
          size="sm">
          <a v-if="TipoImovelEditVm.tipoImovel.id">Editar</a>
          <a v-else>Adicionar</a>
        </biblioteca-button>
      </div>
    </biblioteca-form>
  </div>
</template>
<script>

import { goHistoryBack } from '@/router/route.service';

export default {
  name: 'BibliotecaTipoimovelEdit',
  inject: ['TipoImovelEditVm'],
  data() {
    return {
    };
  },
  methods: {
    goHistoryBack,
    save() {
      this.$emit('save');
    },
  },
};
</script>
