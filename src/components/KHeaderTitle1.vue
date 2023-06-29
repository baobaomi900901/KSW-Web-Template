<!--
* @description  参数1
* @fileName  KHeaderTitle1
* @author userName
* @date 2023-06-29 17:11:18
* @version V3.0.0
!-->
<template>
  <div id="KHeaderTitle1" class="KRPOMDemo-h1">一级标题 (私有类)</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
</script>

<style scoped>
.KRPOMDemo-h1 {
  @apply text-4xl bg-red-500;
}
</style>