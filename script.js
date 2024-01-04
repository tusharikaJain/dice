let diceImg=document.getElementsByClassName('diceImg')[0];
let btn=document.getElementById('btn');
let displayNum=document.getElementById('displayNum')
//console.log(btn);
let num;
function shake(){
    diceImg.innerHTML = '<img src="images/diceroll.gif" alt="Dice1">';
}
btn.addEventListener('click',change)

function change(){
 // console.log("hello");
 shake()
 setTimeout(() => {
    num=Math.floor(Math.random()*6+1);
    //num = 1;
    console.log(num);
    if(num == 1)
    {
        diceImg.innerHTML = '<img src="images/dice1.png" alt="Dice1">';
    }
    else if(num == 2)
    {
        diceImg.innerHTML = '<img src="images/dice2.png" alt="Dice2">';
    }
    if(num == 3)
    {
        diceImg.innerHTML = '<img src="images/dice3.png" alt="Dice3">';
    }
    else if(num == 4)
    {
        diceImg.innerHTML = '<img src="images/dice4.png" alt="Dice4">';
    }
    if(num == 5)
    {
        diceImg.innerHTML = '<img src="images/dice5.png" alt="Dice5">';
    }
    else if(num == 6)
    {
        diceImg.innerHTML = '<img src="images/dice6.png" alt="Dice6">';
    }
   
    displayNum.innerHTML= num;
    //console.log(displayNum);
    //console.log(diceImg);
 }, 1000);

}