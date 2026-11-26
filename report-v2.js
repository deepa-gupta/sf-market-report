(()=>{'use strict';
const search=document.getElementById('nb-search'), count=document.getElementById('nb-count');
function filter(){const q=search.value.trim().toLowerCase();let visible=0;document.querySelectorAll('.nb-table tbody tr').forEach(row=>{const match=row.cells[0].textContent.toLowerCase().includes(q);row.hidden=!match;if(match&&row.closest('.nb-table-wrap').style.display!=='none')visible++;});count.textContent=visible+' matching neighborhoods';}
if(search&&count){search.addEventListener('input',filter);document.querySelectorAll('.nb-tab').forEach(b=>b.addEventListener('click',filter));filter();}
document.querySelectorAll('.nb-table th[onclick]').forEach(th=>{th.tabIndex=0;th.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();th.click();}});th.addEventListener('click',()=>{th.closest('tr').querySelectorAll('th').forEach(t=>t.removeAttribute('aria-sort'));th.setAttribute('aria-sort',th.classList.contains('sort-asc')?'ascending':'descending');});});
const buttons=[...document.querySelectorAll('.slice-btn')];function period(b){return (b.getAttribute('onclick')||'').match(/setSlice\(\s*['"]([^'"]+)['"]/)?.[1];}
buttons.forEach(b=>b.addEventListener('click',()=>{const p=period(b);if(p){const url=new URL(location.href);url.searchParams.set('period',p);history.replaceState(null,'',url);}}));
const requested=new URL(location.href).searchParams.get('period');if(requested){buttons.find(b=>period(b)===requested)?.click();}
const detail=document.querySelector('details.commentary');let old=false;window.addEventListener('beforeprint',()=>{if(detail){old=detail.open;detail.open=true;}});window.addEventListener('afterprint',()=>{if(detail)detail.open=old;});
})();