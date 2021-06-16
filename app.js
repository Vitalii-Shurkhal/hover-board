const board = document.querySelector('#board');
const SQUEARES_NUMBER = 460;
const colors = ['#ff4000', '#ff8000', '#ffff00', '#80ff00', '#00ff80', '#00ffff', '#0000ff', '#ff00ff']

for (let i = 0; i < SQUEARES_NUMBER; i++){
    const squeare = document.createElement('div');
    squeare.classList.add('square');

    squeare.addEventListener('mouseover', ()=>{
        setColor(squeare)
    })

    squeare.addEventListener('mouseleave', ()=>{
        removeColor(squeare)
    })

    board.append(squeare);

}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` 
} 

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}
