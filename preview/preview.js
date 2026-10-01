import { tokens } from '../dist/tokens.js';
const theme=document.querySelector('#theme');
function updateTheme(){
 document.documentElement.dataset.msTheme=theme.value;
 const colors=tokens.themes[theme.value];
 const swatches=document.querySelector('#swatches'); swatches.replaceChildren();
 for(const [name,label] of [['bg','Canvas'],['text','Ink'],['action','Action'],['danger','Danger'],['warning','Warning'],['info','Information']]){
  const card=document.createElement('div');card.className='swatch';
  const swatch=document.createElement('div');swatch.className='swatch-color';swatch.style.background=colors[name];
  const detail=document.createElement('div');detail.className='swatch-text';
  const title=document.createElement('strong');title.textContent=label;
  const value=document.createElement('code');value.textContent=colors[name];
  detail.append(title,value);card.append(swatch,detail);swatches.append(card);
 }
}
theme.addEventListener('change',updateTheme);updateTheme();
const status=document.querySelector('#action-status');
document.querySelector('#save-example').addEventListener('click',()=>{status.textContent='Example checked. No project data was changed.';});
for(const button of document.querySelectorAll('[data-density]')) button.addEventListener('click',()=>{
 for(const other of document.querySelectorAll('[data-density]')) other.setAttribute('aria-pressed',String(other===button));
 document.querySelector('#density-example').dataset.compact=String(button.dataset.density==='Compact');
 status.textContent=`${button.dataset.density} specimen spacing selected.`;
});
const dialog=document.querySelector('#evidence'),opener=document.querySelector('#open-evidence');
opener.addEventListener('click',()=>dialog.showModal());
document.querySelector('#close-evidence').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>opener.focus());
const field=document.querySelector('#reason'),error=document.querySelector('#reason-error'),formStatus=document.querySelector('#form-status');
document.querySelector('#request-form').addEventListener('submit',event=>{
 event.preventDefault(); const invalid=!field.value.trim();
 error.hidden=!invalid;field.setAttribute('aria-invalid',String(invalid));
 field.setAttribute('aria-describedby',invalid?'reason-hint reason-error':'reason-hint');
 formStatus.textContent=invalid?'':'Example is valid. Nothing was saved or sent.';
 if(invalid)field.focus();
});
