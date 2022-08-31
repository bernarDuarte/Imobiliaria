<template>
  <biblioteca-single-content-layout container-size="lg">
    <template #content>
      <div class="d--flex justify-content--space-between align-items--center">
        <biblioteca-header>Administrador</biblioteca-header>
        <biblioteca-button @click="onCreateAdm">
          Adicionar Administrador
        </biblioteca-button>
      </div>
      <table v-if="admList && admList.length > 0" class="table">
        <tbody>
          <tr v-for="adm in admList" :key="adm.id">
            <td class="py-3 px-2">
              <biblioteca-header size="sm" class="d-flex align-item--center">
                <biblioteca-adm-link :id="adm.id">
                  {{ adm.nome }}
                </biblioteca-adm-link>
              </biblioteca-header>
              <biblioteca-p color="regular">
                {{ adm.email }}
              </biblioteca-p>
            </td>
            <td class="align-middle text-end">
              <el-dropdown
                trigger="click">
                <biblioteca-icon
                  icon="three-dots-vertical"
                  class="cursor--pointer mx--md" />
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <biblioteca-adm-link
                      :id="adm.id"
                      action="edit">
                      <biblioteca-icon size="sm" icon="pencil" />
                      Editar
                    </biblioteca-adm-link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <a @click="setDeleteAdm(adm)">
                      <biblioteca-icon size="sm" icon="trash" />
                      Excluir
                    </a>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <biblioteca-modal-delete
                v-if="showModal(adm)"
                content="Você realmente deseja excluir o Administrador?"
                @close="setDeleteAdm(null)"
                @confirm="onDeleteAdm(adm)">
              </biblioteca-modal-delete>
            </td>
          </tr>
        </tbody>
      </table>
      <biblioteca-p v-else class="opacity--50 my--lg">( Sem administradores )</biblioteca-p>
    </template>
  </biblioteca-single-content-layout>
</template>

<script>
import { toastError } from '@/services/toastService';
import { fetchAdm, removeAdm } from '@/modules/Adm/adm.service';
import { goToCreateAdm } from '@/modules/Adm/adm.routes';

import BibliotecaAdmLink from '@/modules/Adm/components/AdmLink.vue';
import BibliotecaSingleContentLayout from '@/layouts/SingleContentLayout.vue';

export default {
  name: 'BibliotecaGerenciaradms',
  components: {
    BibliotecaAdmLink,
    BibliotecaSingleContentLayout,
  },
  data() {
    return {
      admList: [],
      admDelete: null,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      this.admList = [];
      fetchAdm()
        .then(data => {
          this.admList = data.data;
        })
        .catch(() => {
          this.admList = [];
        });
    },
    onCreateAdm() {
      goToCreateAdm(this.$router);
    },
    setDeleteAdm(adm) {
      this.admDelete = adm;
    },
    showModal(adm) {
      return this.admDelete && this.admDelete.id === adm.id;
    },
    onDeleteAdm(adm) {
      removeAdm(adm)
        .then(() => {
          this.$router.go(0);
        })
        .catch(() => toastError('Não foi possível excluir o Administrador'));
    },
  },
};
</script>
