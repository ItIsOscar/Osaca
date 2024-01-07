import { createElementAndProperty } from "./HTMLHelper/CreateElementAndProperty.js";
import { generateTaskBar } from "./Component/generateTaskBar.js";

export function createTasksSite() {
    let content = createElementAndProperty("div", document.body, "basicContent")
    for(let current = 0; current < 3; current++) {
        generateTaskBar(content)
        createElementAndProperty("br", content)
    }
}

