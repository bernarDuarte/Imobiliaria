<template>
  <div>
    <div v-if="adms.length > 1">
      <div v-if="showLabel">
        administradores*
      </div>
      <biblioteca-select
        v-bind="$attrs"
        name="administradores"
        rules="required"
        :class="showLabel ? 'mt--md' : ''"
        @on-change="onChange">
        <option :value="null" disabled>Selecione um administradores...</option>
        <option
          v-for="adm in adms"
          :key="adm.id"
          :value="adm.id">
          {{ adm.nome }}
        </option>
      </biblioteca-select>
    </div>
    <div v-else class="mb-3 mt-4">
      <biblioteca-p color="danger">
        *Você não possui administradores cadastrados*
        <biblioteca-button @click="onCreate">
          Criar administradores
        </biblioteca-button>
      </biblioteca-p>
    </div>
  </div>
</template>

<script>
import { fetchAdm } from '@/modules/Adm/adm.service';
import { goToCreateAdm } from '@/modules/Adm/adm.routes';

export default {
  name: 'BibliotecaadmSelect',
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
      adms: [],
    };
  },
  created() {
    this.onfetch();
  },
  methods: {
    onfetch() {
      fetchAdm()
        .then(data => {
          this.adms = data.data;
        })
        .catch(() => {
          this.adms = null;
        });
    },
    onChange(id) {
      this.$emit('on-change', { id });
    },
    onCreate() {
      goToCreateAdm(this.$router);
    },
  },
};
</script>
