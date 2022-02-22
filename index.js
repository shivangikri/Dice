//number on dice 1
var n=Math.random();//generating random number[0-1)
n=n*6;  //[0-6)
n=Math.floor(n)+1;  //[1-6]
var randomDiceImg1src="images/dice"+n+".png";   //source for image1
document.querySelector(".img1").setAttribute("src",randomDiceImg1src);




//number on dice 2
var n1=Math.random();
n1=n1*6;
n1=Math.floor(n1)+1;
var randomDiceImg2="images/dice"+n1+".png";
document.querySelector(".img2").setAttribute("src",randomDiceImg2);



//result
if(n1>n){
    document.querySelector("h1").innerHTML="Player 2 win! 🚩";
}else if(n>n1){
    document.querySelector("h1").innerHTML="🚩 Player 1 win!";
}else{
    document.querySelector("h1").innerHTML="Draw! 🎲";
}
