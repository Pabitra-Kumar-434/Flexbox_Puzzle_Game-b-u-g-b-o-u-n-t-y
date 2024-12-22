const levels = [
    {
        level:"1",
        instructions:"Welcome to Flexbox Puzzle, a game where you help box by writing CSS code! move this box to the right place using the justify-content property, which prorperty move      the box to centre : <code>start, center, end </code> ",
        solution:"justify-content: center;" 
    },
    {level:"1",
        instructions:"-----",
        solution:"justify-content: center;" 
    }
]

let currentLevel = 0;

const interface = document.getElementById('all');
const nextBtn = document.getElementById('next');

function interface_create(level_index){
    const x = levels[level_index]
    interface.innerHTML = `<div class="game">
        <div class="display"> 
            <div class="display-0" id="display-0">
                <div class="box1 element"></div>
                <div class="box2 element"></div>
                <div class="box3 element"></div>
            </div>
        </div>
        <!-- Center Part -->
        <div class="center-part">
            <div class="code">
                <h1 class="level">Level - <span>${levels.level}</span></h1>
                <p>${levels.instructions}</p>
                </div>
            <div class="coding">
                <div class="lines">
                    <ul class="lines-ul">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>                        
                    </ul>
                    <pre class="coding-pre">#pond {
        display: flex;
        <textarea name="code" id="textarea" cols="30" rows="2"></textarea>
      }
                </pre>
                </div>
                <div class="next">
                    <button id="next">Next</button>
                </div>
            </div>
        </div>
    </div>`;
}

function interface_change(style_input){
    const box_place = document.getElementById('display-0')
    box_place.style.cssText += style_input    
}

function animation(){
    const boxes = document.querySelector('.box1');
            boxes.forEach((box, index) => {
                box.style.transform = translateX($`index * 100px`);
                box.style.opacity = '0.8';
            })
            const boxs = document.querySelector('.box2');
            boxes.forEach((box, index) => {
                box.style.transform = translateX($`index * 100px`);
                box.style.opacity = '0.8';
            })
            const boxe = document.querySelector('.box3');
            boxes.forEach((box, index) => {
                box.style.transform = translateX($`index * 100px`);
                box.style.opacity = '0.8';
            })
}

function level_check(){
    const userInput = document.getElementById('textarea').value.trim();
    const solution = levels[currentLevel].solution;

    if (userInput === solution) {
        interface_change(userInput);
        animation();
        setTimeout(() => {
            alert('Correct! Moving to the next level.');
            currentLevel++;
            if (currentLevel < levels.length) {
                loadLevel(currentLevel);
            } else {
                alert('Congratulations! You completed all levels!');
                submitBtn.disabled = true;
            }
        },1000);
    } else {
        alert('Incorrect! Try again.');
    }
}

interface_create(currentLevel)
nextBtn.addEventListener('click', level_check);