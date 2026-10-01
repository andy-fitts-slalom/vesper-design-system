<script setup lang="ts">
withDefaults(defineProps<{ tone?: 'neutral'|'success'|'warning'|'danger'|'info' }>(),{tone:'neutral'});
</script>
<template><span :class="['vs-badge',`vs-tone-${tone}`]"><slot /></span></template>
