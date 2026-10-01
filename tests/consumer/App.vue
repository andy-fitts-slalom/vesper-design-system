<script setup lang="ts">
import { ref } from 'vue';
import { tokens } from '@vesper/ui';
import { VesperBrand, VesperButton, VesperBadge, VesperNotice, VesperMetric, VesperEmpty, VesperField } from '@vesper/ui/vue';
import { vesperVuetifyTheme, vesperVuetifyDefaults } from '@vesper/ui/vuetify';
import { vesperChartStyle } from '@vesper/ui/charts';
const value=ref('');
const checked=ref(false);
const theme=vesperVuetifyTheme('dark');
const chart=vesperChartStyle('paper');
const defaults=vesperVuetifyDefaults;
</script>
<template><main class="vs-root"><VesperBrand product="Consumer fixture" /><VesperButton @click="checked = true">Save</VesperButton><VesperButton busy>Saving</VesperButton><VesperBadge tone="warning">Needs review</VesperBadge><VesperNotice title="Local only" announcement="polite">No one was notified.<template #actions><VesperButton variant="quiet">Retry</VesperButton></template></VesperNotice><VesperMetric label="Rate" value="Unavailable" note="No denominator"/><VesperEmpty title="No matches" description="Clear a filter"><VesperButton variant="secondary">Clear</VesperButton></VesperEmpty><VesperField id="reason" label="Reason" hint="Local" error="Required" required v-slot="{id,describedby,invalid,required}"><textarea :id="id" v-model="value" :aria-describedby="describedby" :aria-invalid="invalid" :required="required" class="vs-input"/></VesperField><p>{{ tokens.version }} / {{ theme.colors.primary }} / {{ chart.colors[0] }} / {{ defaults.VCard.elevation }} / {{ checked }}</p></main></template>
