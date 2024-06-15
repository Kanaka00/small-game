let count = document.querySelector('.count');
let gameBox = document.querySelector('.game-box');
let btn = document.querySelector('.btn');
let score = 0;

btn.addEventListener('click', () => {
  if(btn.innerText ==='start'){
    gameBox.classList.add('game-box-animation');
    btn.innerText ='stop';
  }else if(btn.innerText ==='stop'){
    gameBox.classList.remove('game-box-animation');
    btn.innerText='start';
  }
  else{
    console.log('Please try again')
  }
});
gameBox.addEventListener('click', (e) =>{
if(gameBox.classList.contains('game-box-animation')){
  score +=1;
  count.innerText = score;
};

});
 

