<template>
  <biblioteca-single-content-layout container-size="lg">
    <template #content>
      <div class="d--flex justify-content--space-between align-items--center">
        <biblioteca-header>Tipo Imovel</biblioteca-header>
        <biblioteca-button @click="onCreateTipoImovel">
          Adicionar Tipo Imovel
        </biblioteca-button>
      </div>
      <table v-if=" tipoImovelList && tipoImovelList.length > 0" class="table">
        <tbody>
          <tr v-for=" tipoImovel in tipoImovelList " :key="tipoImovel.id">
            <td class="py-3 px-2">
              <biblioteca-header size="sm" class="d-flex align-item--center">
                <biblioteca-tipoimovel-link :id="tipoImovel.id">
                  {{ tipoImovel.nome }}
                </biblioteca-tipoimovel-link>
              </biblioteca-header>
            </td>
            <td class="align-middle text-end">
              <el-dropdown
                trigger="click">
                <biblioteca-icon
                  icon="three-dots-vertical"
                  class="cursor--pointer mx--md" />
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <biblioteca-tipoimovel-link
                      :id="tipoImovel.id"
                      action="edit">
                      <biblioteca-icon size="sm" icon="pencil" />
                      Editar
                    </biblioteca-tipoimovel-link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <a @click="setDeleteTipoImovel(tipoImovel)">
                      <biblioteca-icon size="sm" icon="trash" />
                      Excluir
                    </a>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <biblioteca-modal-delete
                v-if="showModal(tipoImovel)"
                content="Você realmente deseja excluir o tipo de imovel ?"
                @close="setDeleteTipoImovel(null)"
                @confirm="onDeleteTipoImovel(tipoImovel)">
              </biblioteca-modal-delete>
            </td>
          </tr>
        </tbody>
      </table>
      <biblioteca-p v-else class="opacity--50 my--lg">( Sem Tipos Imoveis )</biblioteca-p>
    </template>
  </biblioteca-single-content-layout>
</template>

<script>

import { toastError } from '@/services/toastService';
import { fetchTipoImovel, removeTipoImovel } from '@/modules/tipoImovel/tipoImovel.service';
import { goToCreateTipoImovel } from '@/modules/tipoImovel/tipoImovel.routes';
import BibliotecaTipoimovelLink from '@/modules/tipoImovel/components/TipoImovelLink.vue';
import BibliotecaSingleContentLayout from '@/layouts/SingleContentLayout.vue';

export default {
  name: 'BibliotecaGerenciarTipoImovel',
  components: {
    BibliotecaTipoimovelLink,
    BibliotecaSingleContentLayout,
  },
  data() {
    return {
      tipoImovelList: [],
      tipoImovelDelete: null,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      this.tipoImovelList = [];
      fetchTipoImovel()
        .then(data => {
          this.tipoImovelList = data.data;
        })
        .catch(() => {
          this.tipoImovelList = [];
        });
    },
    onCreateTipoImovel() {
      goToCreateTipoImovel(this.$router);
    },
    setDeleteTipoImovel(tipoImovel) {
      this.tipoImovelDelete = tipoImovel;
    },
    showModal(tipoImovel) {
      return this.tipoImovelDelete && this.tipoImovelDelete.id === tipoImovel.id;
    },
    onDeleteTipoImovel(tipoImovel) {
      removeTipoImovel(tipoImovel)
        .then(() => {
        })
        .catch(() => toastError('Não foi possível excluir o tipo de imovel'));
    },
  },
};
</script>
