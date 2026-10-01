<script setup lang="ts">
withDefaults(defineProps<{ variant?: 'primary'|'secondary'|'quiet'|'danger'; type?: 'button'|'submit'|'reset'; disabled?: boolean; busy?: boolean }>(), {variant:'primary',type:'button'});
</script>
<template><button :type="type" :disabled="disabled || busy" :aria-busy="busy || undefined" :class="['vs-button',`vs-button--${variant}`]"><slot /></button></template>
