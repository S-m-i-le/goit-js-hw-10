import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as F,i as p}from"./assets/vendor-651d7991.js";let l;const o=document.querySelector("button");o.setAttribute("disabled","");const T={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){let n=new Date;t[0].getTime()<=n.getTime()?(o.disabled=!0,p.error({title:"Error",position:"topRight",backgroundColor:"#EF4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF",theme:"dark",message:"Please choose a date in the future"}),console.log(t[0])):(o.disabled=!1,o.addEventListener("click",()=>{l=t[0].getTime(),setInterval(u,1e3),o.disabled=!0}))}};F("#datetime-picker",T);function u(){const t=document.querySelector("[data-days]"),n=document.querySelector("[data-hours]"),i=document.querySelector("[data-minutes]"),c=document.querySelector("[data-seconds]"),m=new Date().getTime(),e=l-m,d=1e3,a=d*60,r=a*60,s=r*24;if(e>=0){const S=Math.floor(e/s),f=Math.floor(e%s/r),g=Math.floor(e%s%r/a),h=Math.floor(e%s%r%a/d);t.innerText=S.toString().padStart(2,"0"),n.innerText=f.toString().padStart(2,"0"),i.innerText=g.toString().padStart(2,"0"),c.innerText=h.toString().padStart(2,"0")}else clearInterval(u),t.textContent="00",n.textContent="00",i.textContent="00",c.textContent="00"}
//# sourceMappingURL=commonHelpers.js.map
