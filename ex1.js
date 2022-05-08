const x = Math.random()* 10;
res=prompt("choose difficulty \n easy = 7 tries , medium = 4 tries , hard = 2 tries");
let tries;
if (res=="easy"||res==7)
    tries = 7 ;
else if(res=="medium")
    tries = 4;
else
    tries = 2;
let guess;
while(tries){
    tries--;
    guess = prompt("enter your guess");
    if (guess == x){
        window.alert("you won");
        tries =0 ;
    }
    else
    {
        window.alert(tries+"left")
    }
}
if(! tries){
    window.alert("you lost!")
}