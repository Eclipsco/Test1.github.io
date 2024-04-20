
var quit = document.getElementsByClassName('quit')[0];
var bloc_gauche = document.getElementsByClassName('bloc_gauche')[0];
var menu_img = document.getElementsByClassName('menu_img')[0];


menu_img.addEventListener('click', function(){
    bloc_gauche.style.marginLeft ='0px'
   

},false)

 
quit.addEventListener('click',function(){
    bloc_gauche.style.marginLeft ='-400px'
},false)