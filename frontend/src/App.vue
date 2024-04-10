<template>
  <div style="height: 100vh">
    <n-message-provider>
      <n-layout has-sider style="height: 100vh">
        <n-layout-sider v-if="show_aside_bar">
          <Menu />
        </n-layout-sider>
        <n-layout>
          <n-layout-header>
            <div class="page-title">
              {{ page_title }}
            </div>
          </n-layout-header>
          <n-layout-content content-style="padding: 24px;">
            <RouterView></RouterView> 
          </n-layout-content>
        </n-layout>
      </n-layout>
    </n-message-provider>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useStore } from './store';
import Menu from './components/Menu.vue';
const store = useStore()

const show_aside_bar = ref(true)
const page_title = ref("PageTitle")

// show_aside_bar.value = store.isLogin

// watch(() => store.isLogin, (val) => {
//   show_aside_bar.value = val
// })
</script>

<style lang="less" scoped>
.page-title {
  font: 24px bold;
  padding: 8px;
}
</style>