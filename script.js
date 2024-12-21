const levels = [
    {
        instructions: "Level 1: Use 'justify-content: center;' to center the boxes horizontally.",
        playgroundStyles: "display: flex;",
        solution: "justify-content: center;",
        description:""
    }
];

let currentLevel = 0;

const interface = document.getElementById('all');
const submitBtn = document.getElementById('');

function interface_create(level_index){
    const x = levels[level_index]
    interface.innerHTML = `<div class="game">
        <div class="display"> 
            <div class="display-0">
                <div class="box1 element"></div>
                <div class="box2 element"></div>
                <div class="box3 element"></div>
            </div>
        </div>
        <!-- Center Part -->
        <div class="center-part">
            <div class="code">
                <h1 class="level">Level - <span>1</span></h1>
                <p>Use <code class="code-code1">justify-content:</code> again to help these frogs get to their lilypads.
                    Remember that this CSS property aligns items horizontally and accepts the following values:</p>
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
        <textarea name="" id="textarea" cols="30" rows="2"></textarea>
                </pre>
                </div>
                <div class="next">
                    <button>Next</button>
                </div>
            </div>
        </div>
    </div>`;
}



interface_create(currentLevel)
