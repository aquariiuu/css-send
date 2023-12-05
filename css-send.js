var cssSend.root = document.querySelector(':root');
cssSend.root.style.setProperty('--scroll', 0);
cssSend.root.style.setProperty('--scroll-height', (document.documentElement.scrollHeight-window.innerHeight))
cssSend.root.style.setProperty('--scroll-percent', 0 );

document.addEventListener("scroll", (event) => {  
  cssSend.style.setProperty('--scroll', window.scrollY);
  cssSend.style.setProperty('--scroll-percent', window.scrollY/(document.documentElement.scrollHeight-window.innerHeight) * 100 );
})
document.addEventListener("click", (event) => {   
  cssSend.style.setProperty('--lastClickX', event.clientX);
  cssSend.style.setProperty('--lastClickY', event.clientY);  
})
document.addEventListener("mousemove", (event) => {  
  cssSend.style.setProperty('--lastMouseX', event.clientX);
  cssSend.style.setProperty('--lastMouseY', event.clientY);
})
