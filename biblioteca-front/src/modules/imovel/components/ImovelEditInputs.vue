<template>
  <div>
    <biblioteca-form v-if="imovelEditVm.imovel" :submit="save">
      <div class="form-field mt-4">
        <biblioteca-input
          v-model="imovelEditVm.imovel.titulo"
          label="Título*"
          name="titulo"
          type="text"
          rules="required|min:2"
          placeholder="Título" />
      </div>
      <div class="form-field">
        <biblioteca-textarea
          v-model="imovelEditVm.imovel.descricao"
          label="Descricao*"
          name="descricao"
          type="text"
          rules="required"
          placeholder="Descricao" />
      </div>
      <div class="form-field">
        <biblioteca-textarea
          v-model="imovelEditVm.imovel.valor"
          label="Valor*"
          name="valor"
          type="float"
          rules="required"
          placeholder="Valor do imovel" />
      </div>
      <div class="form-field">
        <biblioteca-textarea
          v-model="imovelEditVm.imovel.TipoImovel"
          label="TipoImovel*"
          name="id"
          type="int"
          rules="required"
          placeholder="Id do Tipo do Imovel" />
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
          <a v-if="imovelEditVm.imovel.id">Editar</a>
          <a v-else>Adicionar</a>
        </biblioteca-button>
      </div>
    </biblioteca-form>
  </div>
</template>

<script>
import { goHistoryBack } from '@/router/route.service';

export default {
  name: 'BibliotecaLivroEdit',
  inject: ['imovelEditVm'],
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
