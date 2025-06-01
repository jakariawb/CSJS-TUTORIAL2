

window.onload = () => {
   main();
   main1()
}

function main (){
   var body1 = document.getElementById('body')
   var btn = document.getElementById('btn')
   var colorbox = document.getElementById('h')
   var copyBtn = document.getElementById('copy')
   
   btn.addEventListener('click', function (){
       var rend = gnaratRGB()
       body1.style.backgroundColor = rend;
       colorbox.value = rend;
   },2000)
   
   copyBtn.addEventListener('click',function(){
    navigator.clipboard.writeText(colorbox.value)
   })
}
function gnaratRGB(){
    var red =Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
  
  return `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
}


function main1 (){
   var body2 = document.getElementById('continer')
   var btn2 = document.getElementById('btn2')
   var colorbox1 = document.getElementById('ch')
   var copy1 = document.getElementById('copy1')
   
   btn2.addEventListener('click', function (){
       var rends = gnaratRGB()
       body2.style.backgroundColor = rends;
       colorbox1.value = rends;
   })
   copy1.addEventListener('click', function(){
       navigator.clipboard.writeText(colorbox1.value)
   })
   
}
function gnaratRGB(){
    var red =Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
  return `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;

}
