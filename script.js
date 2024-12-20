const levels = [
    {
        instructions: "Level 3: Use 'justify-content: space-between;' to spread the boxes evenly.",
        playgroundStyles: "display: flex;",
        solution: "justify-content: space-between;"
    },
    {
        instructions: "Level 4: Use 'flex-direction: column;' to stack the boxes vertically.",
        playgroundStyles: "display: flex;",
        solution: "flex-direction: column;"
    },
    {
        instructions: "Level 5: Combine 'justify-content: center;' and 'align-items: center;' to center the boxes in both directions.",
        playgroundStyles: "display: flex; height: 200px;",
        solution: "justify-content: center; align-items: center;"
    }
];

let currentLevel = 0;

