<script setup lang="ts">
defineProps<{ label: string; value: string|number; note: string }>();
</script>
<template><div class="vs-surface"><dl class="vs-metric"><dt>{{ label }}</dt><dd>{{ value }}</dd></dl><p class="vs-metric__note">{{ note }}</p></div></template>
