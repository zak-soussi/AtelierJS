let color=document.getElementById("color");
let size=document.getElementById("size");
let police=document.getElementById("police");

color.addEventListener("input",function() {
    document.getElementById("test").style.color=color.value;
});

size.addEventListener("input",function(e){

    document.getElementById("test").style.fontSize=size.value+"px";
})

police.addEventListener("input", function(){
    document.getElementById("test").style.fontFamily=police.value;
})