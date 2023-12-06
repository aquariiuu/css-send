var cssSend = {"root": document.querySelector(':root')}
cssSend.root.style.setProperty('--scroll', 0);
cssSend.root.style.setProperty('--scroll-height', (document.documentElement.scrollHeight-window.innerHeight))
cssSend.root.style.setProperty('--scroll-percent', 0 );

window.addEventListener("scroll", (event) => {  
  cssSend.root.style.setProperty('--scroll', window.scrollY);
  cssSend.root.style.setProperty('--scroll-percent', window.scrollY/(document.documentElement.scrollHeight-window.innerHeight) * 100 ); 
})
window.addEventListener("click", (event) => {   
  cssSend.root.style.setProperty('--lastClickX', event.clientX);
  cssSend.root.style.setProperty('--lastClickY', event.clientY);  
})
window.addEventListener("mousemove", (event) => {  
  cssSend.root.style.setProperty('--lastMouseX', event.clientX);
  cssSend.root.style.setProperty('--lastMouseY', event.clientY);
})
