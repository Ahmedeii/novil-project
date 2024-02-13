let stars=document.getElementById("stars")
 let mountain3=document.getElementById("mountains3")
let mountain4=document.getElementById("mountains4")
let river=document.getElementById("river")
let boat=document.getElementById("boat")
let h2=document.getElementById("h2")
let moon=document.getElementById("moon")

window.onscroll= function(){
  let value =scrollY;
  stars.style.left=value+'px';
  mountain3.style.top=value*2+"px"
  mountain4.style.top=value*1.5+'px'
  moon.style.top=value*3+'px'
  river.style.top=value+'px'
  boat.style.top=value+'px'
  boat.style.left=value*3+"px"
  h2.style.fontSize=value+'px'

if(scrollY>=67){
  h2.style.fontSize=67+'px'
  h2.style.position='fixed'
  if(scrollY>=127){
    document.getElementById("mainn").style.backgroundColor='skyblue';
   stars.style.display="none"
  }else{
    document.getElementById("mainn").style.backgroundColor='#200016'
    stars.style.display="block"
  }
}
}