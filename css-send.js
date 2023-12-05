var r = document.querySelector(':root');
r.style.setProperty('--scroll', 0);
r.style.setProperty('--scroll-height', window.scrollHeight );
r.style.setProperty('--scroll-percent', 0 );

document.addEventListener("scroll", (event) => {  
  r.style.setProperty('--scroll', window.scrollY);
  r.style.setProperty('--scroll-percent', window.scrollY/window.scrollHeight * 100 );
})
document.addEventListener("click", (event) => {   
  console.log(event.clientX, event.clientY)
  r.style.setProperty('--lastClickX', event.clientX);
  r.style.setProperty('--lastClickY', event.clientY);
})
document.addEventListener("mousemove", (event) => {  
  r.style.setProperty('--lastMouseX', event.clientX);
  r.style.setProperty('--lastMouseY', event.clientY);
})
