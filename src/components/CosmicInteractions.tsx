import { useEffect } from 'react';
export default function CosmicInteractions(){
 useEffect(()=>{
  const root=document.querySelector<HTMLElement>('.portfolio');
  if(!root)return;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const sections=[...root.querySelectorAll<HTMLElement>('section[id]')];
  const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){root.querySelectorAll('nav a').forEach(a=>{const active=a.getAttribute('href')===`#${entry.target.id}`;if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}});},{rootMargin:'-15% 0px -55% 0px'});
  sections.forEach(s=>observer.observe(s));
  const cards=[...root.querySelectorAll<HTMLElement>('.project-card,.skill-card,.portrait-card,.desktop-nav,.mobile-section')];
  const move=(event:PointerEvent)=>{if(reduced.matches||event.pointerType!=='mouse')return;const card=event.currentTarget as HTMLElement;const rect=card.getBoundingClientRect();const x=(event.clientX-rect.left)/rect.width,y=(event.clientY-rect.top)/rect.height;card.style.setProperty('--mx',`${x*100}%`);card.style.setProperty('--my',`${y*100}%`);card.style.setProperty('--rx',`${(y-.5)*-5}deg`);card.style.setProperty('--ry',`${(x-.5)*5}deg`);};
  const leave=(event:PointerEvent)=>{const card=event.currentTarget as HTMLElement;card.style.setProperty('--rx','0deg');card.style.setProperty('--ry','0deg');};
  const popupMove=(event:PointerEvent)=>{if(reduced.matches||event.pointerType!=='mouse')return;const target=event.target;if(!(target instanceof Element))return;const popup=target.closest<HTMLElement>('.project-dialog');if(!popup)return;const rect=popup.getBoundingClientRect();popup.style.setProperty('--mx',`${(event.clientX-rect.left)/rect.width*100}%`);popup.style.setProperty('--my',`${(event.clientY-rect.top)/rect.height*100}%`);};
  document.addEventListener('pointermove',popupMove,{passive:true});
  cards.forEach(card=>{card.addEventListener('pointermove',move);card.addEventListener('pointerleave',leave);});
  return()=>{document.removeEventListener('pointermove',popupMove);observer.disconnect();cards.forEach(card=>{card.removeEventListener('pointermove',move);card.removeEventListener('pointerleave',leave);});};
 },[]);return null;
}
