<template>
  <div>
    <div v-if="tipoImoveis.length > 1">
      <div v-if="showLabel">
        Tipo do Imovel*
      </div>
      <biblioteca-select
        v-bind="$attrs"
        name="tipoImovel"
        rules="required"
        :class="showLabel ? 'mt--md' : ''"
        @on-change="onChange">
        <option :value="null" disabled>Selecione um Tipo de Imovel...</option>
        <option
          v-for="tipoImovel in tipoImoveis"
          :key="tipoImovel.id"
          :value="tipoImovel.id">
          {{ tipoImovel.nome }}
        </option>
      </biblioteca-select>
    </div>
    <div v-else class="mb-3 mt-4">
      <biblioteca-p color="danger">
        *Você não possui tipos de imoveis cadastrados
        <biblioteca-button @click="onCreate">
          Criar tipoImovel
        </biblioteca-button>
      </biblioteca-p>
    </div>
  </div>
</template>

<script>
import { fetchTipoImovel } from '@/modules/tipoImovel/tipoImovel.service';
import { goToCreateTipoImovel } from '@/modules/tipoImovel/tipoImovel.routes';

export default {
  name: 'BibliotecaTipoImovelSelect',
  props: {
    showLabel: {
      type: Boolean,
      default: true,
    },
    isFilter: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tipoImoveis: [],
    };
  },
  created() {
    this.onfetch();
  },
  methods: {
    onfetch() {
      fetchTipoImovel()
        .then(data => {
          this.tipoImoveis = data.data;
        })
        .catch(() => {
          this.tipoImoveis = null;
        });
    },
    onChange(id) {
      this.$emit('on-change', { id });
    },
    onCreate() {
      goToCreateTipoImovel(this.$router);
    },
  },
};
</script>
