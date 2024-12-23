const $Game_levels = [
    {level:"1: Row Alignment",
     instructions:"Welcome to Flexbox Puzzle, a game where you help box by writing CSS code! Change the <code>flex-direction</code> property to arrange the boxes in a column instead of the default row layout. Experiment with horizontal layouts. ",
     solution:"flex-direction:column;" 
    },
    {level:"2: Align the Box",
     instructions:" To align the box horizontally within the container, use the <code>justify-content</code> property. Try <code>justify-content: center</code> to move the box to the middle. Experiment with other values like <code>flex-start</code> to align it to the left or <code>flex-end</code> to align it to the right. Observe how this property controls horizontal placement.",
     solution:"justify-content: center;" 
    },
    {
     level:"3: Reverse order",
     instructions:" Change the order of boxes visually by using the <code>flex-direction</code> property. Set <code>row-reverse</code> to reverse the horizontal order or <code>column-reverse</code> for vertical reversal. This rearranges the displayed order without affecting the underlying HTML structure.",
     solution:"flex-direction:row-reverse;" 
    },
    {
     level: "4: Space Distribution",
    instructions: "Distribute the space between the boxes using the <code>justify-content</code> property. Try <code>space-between</code> to place equal space between items, <code>space-around</code> to add space around them, and <code>space-evenly</code> for uniform spacing. This helps create balanced and visually appealing layouts.",
    solution: "justify-content:space-between;"
    },
    {
     level: "5: Align to Start",
     instructions: "Change the order of boxes visually by using the <code>flex-direction</code> property. Set <code>row-reverse</code> to reverse the horizontal order or <code>column-reverse</code> for vertical reversal. This rearranges the displayed order without affecting the underlying HTML structure.",
     solution: "align-items:flex-start;"
    },
    {
     level: "6: Vertical Centering",
     instructions: "Combine <code>align-items: center</code> and <code>justify-content: center</code> to position boxes at the center of the container, both vertically and horizontally. This demonstrates how Flexbox can align items along both axes simultaneously for precise placement.",
     solution: "align-items:center; justify-content:center;"
    },
    {
    level: "7: Wrap Items",
    instructions: "Enable wrapping for boxes with the <code>flex-wrap</code> property. Use <code>flex-wrap: wrap</code> to allow items to move to a new row or column when they exceed the container’s width. Test <code>nowrap</code> to see the default behavior and how it constrains items within one line.",
    solution: "flex-wrap:wrap;"
    },
    {
     level: "8: Complex Alignment",
     instructions: "Combine multiple properties like <code>align-items</code>, <code>justify-content</code>, and <code>flex-wrap</code> to create intricate layouts. Use <code>align-items</code> to control vertical alignment, <code>justify-content</code> for horizontal spacing, and <code>flex-wrap</code> to enable multi-line layouts. Experiment with these to achieve the desired arrangement.",
     solution: "align-items:center; justify-content:space-evenly; flex-wrap:wrap;"
    }
    ];

let currentLevel = 0;

const interface = document.getElementById('all');
const nextBtn = document.getElementById('next');

function interface_create(level_index) {
    let x = $Game_levels[level_index];
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
                <h1 class="level">Level - <span>${x.level}</span></h1>
                <p>${x.instructions}</p>
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
            </div>
        </div>
    </div>`;
}

function interface_change(style_input) {
    const box_place = document.getElementById('display-0');
    box_place.style.cssText += style_input;
}

function animation() {
    const boxClasses = document.querySelectorAll('.box1', '.box2', '.box3');
    boxClasses.forEach(boxClass => {
        const boxes = document.querySelectorAll(boxClass);
        boxes.forEach((box, index) => {
            box.style.transform = `translateX(${index * 100}px)`;
            box.style.opacity = '0.8';
        });
    });
}

// ...existing code...

function level_check() {
    const textarea = document.getElementById('textarea');
    const userInput = textarea.value.trim();
    const solution = $Game_levels[currentLevel].solution;

    if (userInput === solution) {
        interface_change(userInput);
        animation();
        alert('correct! go to next.');
        currentLevel++;
        if (currentLevel < $Game_levels.length) {
            interface_create(currentLevel);
        } else {
            alert('Congratulations! You completed all levels!');
            nextBtn.disabled = true;
        }
    } else {
        alert('Incorrect! Try again.');
    }
}

interface_create(currentLevel);
nextBtn.addEventListener('click', level_check);