(function(root,i,j){
root.style.setProperty('--scroll', 0);
root.style.setProperty('--scroll-height', (document.documentElement.scrollHeight-window.innerHeight))
root.style.setProperty('--scroll-percent', 0 );

window.addEventListener("scroll", (event) => {  
  root.style.setProperty('--scroll', window.scrollY);
  root.style.setProperty('--scroll-percent', window.scrollY/(document.documentElement.scrollHeight-window.innerHeight) * 100 );

})
window.addEventListener("click", (event) => {   
  root.style.setProperty('--lastClickX', event.clientX);
  root.style.setProperty('--lastClickY', event.clientY);  
})
window.addEventListener("mousemove", (event) => {  
  root.style.setProperty('--lastMouseX', event.clientX);
  root.style.setProperty('--lastMouseY', event.clientY);
})})(document.querySelector(':root'),0,0)
