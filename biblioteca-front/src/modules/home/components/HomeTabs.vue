<template>
  <el-tabs v-model="tabActive" @tab-click="fetch">
    <el-tab-pane label="Últimos Tipo De Imoveis" name="tipoImovels">
      <div v-if="tipoImovelList.length">
        <div
          v-for="tipoImovel in tipoImovelList"
          :key="tipoImovel.id"
          class="mb--xl">
          <biblioteca-tipo-imovel-card :tipo-imovel="tipoImovel" />
        </div>
      </div>
      <div v-else>
        <biblioteca-p class="opacity--50 my--md">( Sem Tipos De Imoveis )</biblioteca-p>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Últimos Imoveis" name="imoveis">
      <div v-if="imovelList.length">
        <div
          v-for="imovel in imovelList"
          :key="imovel.id"
          class="mb--xl">
          <biblioteca-imovel-card :imovel="imovel" />
        </div>
      </div>
      <div v-else>
        <biblioteca-p class="opacity--50 my--md">( Sem imoveis )</biblioteca-p>
      </div>
    </el-tab-pane>
    <el-tab-pane label="Últimos Administradores" name="adms">
      <div v-if="admList.length">
        <div
          v-for="adm in admList"
          :key="adm.id"
          class="mb--xl">
          <biblioteca-adm-card :adm="adm" />
        </div>
      </div>
      <div v-else>
        <biblioteca-p class="opacity--50 my--md">( Sem Administradores )</biblioteca-p>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { fetchImoveis } from '@/modules/imovel/imovel.service';
import { fetchAdm } from '@/modules/Adm/adm.service';
import { fetchTipoImovel } from '@/modules/tipoImovel/tipoImovel.service';

import BibliotecaImovelCard from '@/modules/imovel/components/ImovelCard.vue';
import BibliotecaAdmCard from '@/modules/Adm/components/AdmCard.vue';
import BibliotecaTipoImovelCard from '@/modules/tipoImovel/components/TipoImovelCard.vue';

export default {
  name: 'BibliotecaHomeTabs',
  components: {
    BibliotecaImovelCard,
    BibliotecaAdmCard,
    BibliotecaTipoImovelCard,
  },
  data() {
    return {
      tabActive: 'tipoImovels',
      imovelList: [],
      admList: [],
      tipoImovelList: [],
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      if (this.tabActive === 'tipoImovels') {
        this.fetchTipoImovel();
      } else if (this.tabActive === 'imoveis') {
        this.fetchImoveis();
      } else if (this.tabActive === 'adms') {
        this.fetchAdm();
      }
    },
    fetchImoveis() {
      fetchImoveis()
        .then(data => {
          this.imovelList = data.data;
        })
        .catch(() => {
          this.imovelList = [];
        });
    },
    fetchAdm() {
      fetchAdm()
        .then(data => {
          this.admList = data.data;
        })
        .catch(() => {
          this.admList = [];
        });
    },
    fetchTipoImovel() {
      fetchTipoImovel()
        .then(data => {
          this.tipoImovelList = data.data;
        })
        .catch(() => {
          this.tipoImovelList = [];
        });
    },
  },
};
</script>
