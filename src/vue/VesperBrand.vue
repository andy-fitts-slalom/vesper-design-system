<script setup lang="ts">
import mark from '../../assets/brand/vesper-mark.svg';
defineProps<{ product?: string; href?: string }>();
</script>
<template>
 <component :is="href ? 'a' : 'div'" :href="href" class="vs-brand">
  <img :src="mark" alt="" width="40" height="40" class="vs-brand__mark" />
  <span><span class="vs-brand__name">VESPER</span><span class="vs-brand__descriptor">MEDIA GROUP</span><span v-if="product" class="vs-brand__product">{{ product }}</span></span>
 </component>
</template>
