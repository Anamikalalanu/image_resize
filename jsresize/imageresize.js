let image=document.getElementById("img1")
let a=document.getElementById("height-px")
let b=document.getElementById("height-%")
let c=document.getElementById("width-px")
let d=document.getElementById("width-%")


function heightPx(){
   image.height=a.value
}
function heightper(){
   image.height=b.value
}
function widthpx(){
   image.height=c.value
}
function widthper(){
   image.height=d.value
}
function link1(){
  let e=document.getElementById("link").value
  document.getElementById("linkhere").setAttribute("href",e)
  
}