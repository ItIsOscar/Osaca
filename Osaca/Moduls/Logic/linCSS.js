import { createElementAndProperty } from "../HTMLCreater/Component/HTMLHelper/CreateElementAndProperty.js"



export function linkCSS(CSShref) {
    for(let current = 0; current < CSShref.length; current++) {
        createElementAndProperty("link", document.head, undefined, ["rel", "href"], ["stylesheet", `./Style/${CSShref[current]}.css`])
    }
} 


