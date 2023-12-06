(function(root){
root.style.setProperty('--scroll', 0);
root.style.setProperty('--scroll-height', (document.documentElement.scrollHeight-window.innerHeight))
root.style.setProperty('--scroll-percent', 0 );
 let scroll = 0
 let scrollHeight = document.documentElement.scrollHeight-window.innerHeight
 let scrollPercent = scroll*100/scrollHeight
 let lastClickX = 0
 let lastClickY = 0 
 let lastMouseX = 0
 let lastMouseY = 0
function update(){ 
for(var i = 0;i<document.styleSheets.length;i++){
  for( var j = 0;j<document.styleSheets[i].cssRules.length;j++){
    if(document.styleSheets[i].cssRules[j].cssText.match('eval')){
      var cl = document.styleSheets[i].cssRules[j].cssText.split(';')       
      for(var k = 0;k<cl.length-1;k++){
        var ce = cl[k].replace(/.*(\-\-.*)\:.*eval(\(.*\?.*\:.*\)).*/gims, "$1,$2").split(',');
       root.style.setProperty(ce[0], eval(ce[1]))
      }
    }
  }
}
}

update();
window.addEventListener("scroll", (event) => {  
  scroll = window.scrollY
  root.style.setProperty('--scroll', scroll);
  scrollPercent = scroll*100/scrollHeight
  root.style.setProperty('--scroll-percent',  scrollPercent );
  update()
})
window.addEventListener("click", (event) => {   
  lastClickX = event.clientX
  lastClickY = event.clientY
  root.style.setProperty('--lastClickX', lastClickX);
  root.style.setProperty('--lastClickY', lastClickY);
  update()
})
window.addEventListener("mousemove", (event) => {  
  lastMouseX = event.clientX
  lastMouseY = event.clientY
  root.style.setProperty('--lastMouseX', lastMouseX);
  root.style.setProperty('--lastMouseY', lastMouseY);
  update()
})})(document.querySelector(':root'))
