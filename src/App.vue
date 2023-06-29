<template>
    <div class="router-box bg-gray-700 text-white text-2xl flex gap-10">
      <router-link to="/KRPOMDemoTitle" active-class=" text-blue-400 "
        >标题演示</router-link
      >
      <router-link to="/KRPOMTemplate" active-class=" text-blue-400 "
        >主页模板</router-link
      >
    </div>
    <router-view></router-view>
</template>

<script lang="ts">
import { ref, watch, defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import device from "current-device";

export default defineComponent({
  name: "App",
  setup() {},
});
</script>

<style>
body {
  height: 100vh;
  width: 100vw;
}

#app {
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
}

.router-box {
  height: 32px;
}
</style>
