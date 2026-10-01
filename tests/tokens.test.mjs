import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {tokens} from '../dist/tokens.js';
const root=new URL('../',import.meta.url);
const source=JSON.parse(fs.readFileSync(new URL('src/tokens.json',root)));
const pkg=JSON.parse(fs.readFileSync(new URL('package.json',root)));
function luminance(hex){return hex.slice(1).match(/../g).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((a,v,i)=>a+v*[.2126,.7152,.0722][i],0);}
function contrast(a,b){const l=[luminance(a),luminance(b)].sort((x,y)=>y-x);return(l[0]+.05)/(l[1]+.05);}
test('all supported text/action/status pairs meet the 4.5 contrast target',()=>{
 for(const [name,t] of Object.entries(tokens.themes)){
  const pairs=[];
  for(const fg of ['text','text-muted'])for(const bg of ['bg','surface','surface-raised','surface-subtle'])pairs.push([fg,bg]);
  pairs.push(['on-action','action'],['on-action','action-hover'],['disabled-text','disabled-bg']);
  for(const tone of ['success','warning','danger','info']){pairs.push([tone,`${tone}-bg`]);for(const bg of ['bg','surface'])pairs.push([tone,bg]);}
  for(const [fg,bg] of pairs)assert.ok(contrast(t[fg],t[bg])>=4.5,`${name} ${fg}/${bg}: ${contrast(t[fg],t[bg]).toFixed(2)}`);
 }
});
test('focus, input boundaries and categorical marks retain a 3:1 contrast target',()=>{
 for(const [name,t] of Object.entries(tokens.themes))for(const fg of ['focus','border-strong','chart-1','chart-2','chart-3'])for(const bg of ['bg','surface','surface-raised'])assert.ok(contrast(t[fg],t[bg])>=3,`${name} ${fg}/${bg}: ${contrast(t[fg],t[bg]).toFixed(2)}`);
});
test('generated themes agree with source roles and CSS, with no missing aliases',()=>{
 assert.equal(pkg.version,source.version);assert.equal(tokens.version,source.version);
 const css=fs.readFileSync(new URL('dist/tokens.css',root),'utf8');
 for(const [name,roles] of Object.entries(source.themes))for(const [role,ref] of Object.entries(roles)){assert.equal(tokens.themes[name][role],source.palette[ref]);assert.ok(css.includes(`--vs-${role}: ${source.palette[ref]};`));}
 const declared=new Set([...css.matchAll(/--vs-([a-z0-9-]+):/g)].map(m=>m[1]));
 for(const file of ['src/styles/index.css','preview/preview.css'])for(const match of fs.readFileSync(new URL(file,root),'utf8').matchAll(/var\(--vs-([a-z0-9-]+)/g))assert.ok(declared.has(match[1])||['tone','tone-bg'].includes(match[1]),`Missing ${match[1]}`);
});
test('package exports and bundled font/brand assets exist',()=>{
 for(const [key,value] of Object.entries(pkg.exports)){if(key.includes('*'))continue;for(const path of typeof value==='string'?[value]:Object.values(value))assert.ok(fs.existsSync(new URL(path,root)),path);}
 const fonts=fs.readFileSync(new URL('src/styles/fonts.css',root),'utf8');
 for(const match of fonts.matchAll(/url\('([^']+)'\)/g))assert.ok(fs.existsSync(new URL(match[1],new URL('src/styles/',root))));
 assert.ok(fs.existsSync(new URL('assets/brand/vesper-mark.svg',root)));
 for(const font of ['DM-Sans','Barlow-Condensed','Libre-Caslon-Display'])assert.ok(fs.readFileSync(new URL(`licenses/${font}-OFL.txt`,root),'utf8').includes('SIL OPEN FONT LICENSE'));
});
test('Ionic complete color definitions include valid RGB and readable contrast',()=>{
 const css=fs.readFileSync(new URL('dist/ionic.css',root),'utf8');
 for(const block of css.split('}').filter(s=>s.includes('--ion-color-primary:'))){
  const vars=Object.fromEntries([...block.matchAll(/--ion-([a-z-]+): ([^;]+);/g)].map(m=>[m[1],m[2]]));
  for(const name of ['primary','secondary','success','warning','danger','medium']){
   const hex=vars[`color-${name}`];
   assert.equal(vars[`color-${name}-rgb`],hex.slice(1).match(/../g).map(v=>parseInt(v,16)).join(', '));
   for(const variation of ['', '-shade','-tint'])assert.ok(contrast(vars[`color-${name}${variation}`],vars[`color-${name}-contrast`])>=4.5,`${name}${variation} contrast`);
  }
 }
});
