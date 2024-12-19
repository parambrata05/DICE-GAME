var n=Math.random()*6;
n=Math.floor(n);
n+=1;
var dice1="dice"+n+".png";
var img1="images/"+dice1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",img1);
var m=Math.random()*6;
m=Math.floor(m);
m+=1;
var dice2="dice"+m+".png";
var img2="images/"+dice2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",img2);
if(n>m)
{
    var a=document.querySelector("h1");
    a.innerHTML="PLayer 1 Wins"
}
else if(n===m)
{
    var a=document.querySelector("h1");
    a.innerHTML="DRAW"
}
else{
    var a=document.querySelector("h1");
    a.innerHTML="PLayer 2 Wins"
}
