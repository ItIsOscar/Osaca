
import { createElementAndProperty } from "../shared/helper/CreateElementAndProperty.js";

export class News extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        let content = createElementAndProperty("div", this, "news_")
        for(let current = 0; current < 3; current++) {
           this.mkCompNews(content)
        } 
    }

    mkCompNews(content) {
        let block = createElementAndProperty("button", content, "news_block")
        this.mkImgNew(block)  
        this.mkText(block)
    }

    mkImgNew(block) {
        let srcImgNew = "https://n1s1.hsmedia.ru/7f/d4/a5/7fd4a5e5457a59c575df1fa38d8be61e/1920x1152_0xac120003_12726234471666876992.jpeg"
        createElementAndProperty("img", block, undefined, "src", `${srcImgNew}` )
    }

    mkText(block) {
        let text = createElementAndProperty('div', block, "news_text")
        createElementAndProperty('h3', text, undefined, "textContent", "Высочайшие горы рухнули")
        createElementAndProperty('p', text, undefined, "textContent", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua")
    }
}
