import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

export default function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0, height = 0, frame = 0, last = 0, time = 0;
    let pointerX = 0, pointerY = 0;
    let stars: {x:number;y:number;size:number;phase:number;depth:number}[] = [];
    let meteors: {x:number;y:number;life:number}[] = [];
    let nextMeteor = 2;
    const resize = () => {
      width = innerWidth; height = innerHeight;
      const ratio = Math.min(devicePixelRatio || 1, 1.5);
      canvas.width = width * ratio; canvas.height = height * ratio;
      ctx.setTransform(ratio,0,0,ratio,0,0);
      stars = Array.from({length:width < 760 ? 65 : 150}, () => ({x:Math.random()*width,y:Math.random()*height,size:Math.random()*1.2+.3,phase:Math.random()*6.28,depth:Math.random()+.3}));
    };
    const draw = (now:number) => {
      const moving = !paused && !preference.matches && !document.hidden;
      const delta = Math.min((now-last)/1000, .04); last = now;
      if(moving) time += delta;
      ctx.clearRect(0,0,width,height);
      stars.forEach(s => {
        const x = (s.x + pointerX*s.depth*16 + width)%width;
        const y = (s.y + pointerY*s.depth*12 - time*s.depth*1.5 + height*100)%height;
        ctx.fillStyle = `rgba(210,225,255,${.25 + (Math.sin(time*.65+s.phase)+1)*.25})`;
        ctx.beginPath();ctx.arc(x,y,s.size,0,Math.PI*2);ctx.fill();
      });
      if(moving && time>nextMeteor){meteors.push({x:Math.random()*width*.8,y:Math.random()*height*.3,life:1});nextMeteor=time+4+Math.random()*5;}
      meteors.forEach(m => {
        if(moving){m.x+=delta*420;m.y+=delta*200;m.life-=delta*.65;}
        const gradient=ctx.createLinearGradient(m.x-110,m.y-52,m.x,m.y);
        gradient.addColorStop(0,'rgba(137,102,255,0)');gradient.addColorStop(1,`rgba(197,243,255,${Math.max(0,m.life)})`);
        ctx.strokeStyle=gradient;ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(m.x-110,m.y-52);ctx.lineTo(m.x,m.y);ctx.stroke();
      });
      meteors=meteors.filter(m=>m.life>0);
      if(moving) frame=requestAnimationFrame(draw);
    };
    const start=()=>{cancelAnimationFrame(frame);last=performance.now();frame=requestAnimationFrame(draw);};
    const onResize=()=>{resize();start();};
    const pointer=(e:PointerEvent)=>{if(!preference.matches&&!paused&&e.pointerType==='mouse'){pointerX=e.clientX/width-.5;pointerY=e.clientY/height-.5;}};
    resize();start();
    addEventListener('resize',onResize);addEventListener('pointermove',pointer,{passive:true});document.addEventListener('visibilitychange',start);preference.addEventListener('change',start);
    return()=>{cancelAnimationFrame(frame);removeEventListener('resize',onResize);removeEventListener('pointermove',pointer);document.removeEventListener('visibilitychange',start);preference.removeEventListener('change',start);};
  },[paused]);
  return <><div className={`cosmos ${paused?'cosmos-paused':''}`} aria-hidden="true"><div className="aurora aurora-one"/><div className="aurora aurora-two"/><div className="aurora aurora-three"/><canvas ref={canvasRef}/></div><button className="motion-control" aria-label={paused?'Play background animation':'Pause background animation'} aria-pressed={paused} onClick={()=>setPaused(!paused)}>{paused?<Play size={14}/>:<Pause size={14}/>}<span>{paused?'Motion off':'Motion on'}</span></button></>;
}
