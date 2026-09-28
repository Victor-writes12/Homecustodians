const h=document.querySelector('header'),bar=document.getElementById('bar'),m=document.querySelector('.mcta');
addEventListener('scroll',()=>{const y=scrollY,t=document.body.scrollHeight-innerHeight;h.classList.toggle('shrink',y>40);bar.style.width=(t>0?y/t*100:0)+'%';m&&m.classList.toggle('show',y>500)});
const burger=document.querySelector('.burger'),nav=document.querySelector('nav');
burger.onclick=()=>{burger.classList.toggle('open');nav.classList.toggle('open');document.body.style.overflow=nav.classList.contains('open')?'hidden':''};
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{burger.classList.remove('open');nav.classList.remove('open');document.body.style.overflow=''}));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);
 if(e.target.dataset.n){const n=+e.target.dataset.n,el=e.target;let c=0;const s=Math.max(1,n/60),t=setInterval(()=>{c+=s;if(c>=n){c=n;clearInterval(t)}el.textContent=Math.floor(c)+(el.dataset.s||'')},25)}}}),{threshold:.15});
document.querySelectorAll('.rv,[data-n]').forEach((el,i)=>{el.style.transitionDelay=(el.closest('.grid')?(i%4)*.12:0)+'s';io.observe(el)});
