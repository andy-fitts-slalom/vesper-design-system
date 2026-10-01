<script setup lang="ts">
withDefaults(defineProps<{ title: string; tone?: 'neutral'|'success'|'warning'|'danger'|'info'; announcement?: 'off'|'polite'|'assertive' }>(),{tone:'info',announcement:'off'});
</script>
<template><div :class="['vs-notice',`vs-tone-${tone}`]" :role="announcement === 'assertive' ? 'alert' : announcement === 'polite' ? 'status' : undefined"><strong class="vs-notice__title">{{ title }}</strong><slot /><div v-if="$slots.actions" class="vs-notice__actions"><slot name="actions" /></div></div></template>
