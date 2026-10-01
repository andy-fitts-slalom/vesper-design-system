<script setup lang="ts">
import { computed, useId } from 'vue';
const props=defineProps<{label:string; id?:string; hint?:string; error?:string; required?:boolean}>();
const generated=useId();
const inputId=computed(()=>props.id || `vs-field-${generated}`);
const description=computed(()=>[props.hint && `${inputId.value}-hint`,props.error && `${inputId.value}-error`].filter(Boolean).join(' ') || undefined);
</script>
<template><div class="vs-field"><label :for="inputId" class="vs-field__label">{{ label }}<span v-if="required"> (required)</span></label><slot :id="inputId" :describedby="description" :invalid="error ? true : undefined" :required="required" /><p v-if="hint" :id="`${inputId}-hint`" class="vs-field__hint vs-muted">{{ hint }}</p><p v-if="error" :id="`${inputId}-error`" class="vs-field__error">{{ error }}</p></div></template>
