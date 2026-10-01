<script setup lang="ts">
defineProps<{ title:string; description:string }>();
</script>
<template><section class="vs-empty"><h2>{{ title }}</h2><p class="vs-muted">{{ description }}</p><div class="vs-cluster" style="justify-content:center"><slot /></div></section></template>
