
import { createElementAndProperty } from "./HTMLHelper/CreateElementAndProperty.js";

export function createNews() {
    let content = createElementAndProperty("div", document.body, "news_")
    let className = []
    for(let current = 0; current < 3; current++) {
        let block = createElementAndProperty("button", content, "news_block")
        createElementAndProperty("img", block, undefined, "src", "https://n1s1.hsmedia.ru/7f/d4/a5/7fd4a5e5457a59c575df1fa38d8be61e/1920x1152_0xac120003_12726234471666876992.jpeg")
        let blockText = createElementAndProperty('div', block, "news_text")
        createElementAndProperty('h3', blockText, undefined, "textContent", "Высочайшие горы рухнули")
        createElementAndProperty('p', blockText, undefined, "textContent", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua")
    }
    
}