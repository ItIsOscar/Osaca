import { createElementAndProperty } from "../shared/helper/CreateElementAndProperty.js";
import { generateTaskBar } from "../shared/components/generateTaskBar.js";

export function createTasksSite() {
    let content = createElementAndProperty("div", document.body, "basicContent")
    for(let current = 0; current < 3; current++) {
        generateTaskBar(content)
        createElementAndProperty("br", content)
    }
}

