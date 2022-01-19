<template>
  <router-view>
    
  </router-view>
</template>

<script setup>

import {ref,provide,inject} from 'vue'
const open = ref(false);
const toggle = () => {
  open.value = !open.value;
};
provide('toggle',toggle);
provide('open',open);


</script>