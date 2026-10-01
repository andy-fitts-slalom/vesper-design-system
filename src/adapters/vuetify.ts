import { tokens } from '../../dist/tokens.js';
export function vesperVuetifyTheme(name: keyof typeof tokens.themes = 'dark') {
 const t=tokens.themes[name];
 return { dark:name==='dark', colors:{background:t.bg,surface:t.surface,'surface-variant':t['surface-raised'],'on-background':t.text,'on-surface':t.text,'on-surface-variant':t.text,primary:t.action,'on-primary':t['on-action'],secondary:t.info,'on-secondary':t['on-action'],error:t.danger,'on-error':t['on-action'],warning:t.warning,'on-warning':t['on-action'],success:t.success,'on-success':t['on-action'],info:t.info,'on-info':t['on-action']} };
}
export const vesperVuetifyDefaults = {
 VBtn:{style:'text-transform:none;letter-spacing:0;font-weight:600;min-height:44px',rounded:'lg'},
 VSelect:{variant:'outlined',density:'comfortable'},
 VCard:{rounded:'lg',elevation:0},
} as const;
