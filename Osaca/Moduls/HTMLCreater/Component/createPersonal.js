
import { createElementAndProperty } from "./HTMLHelper/CreateElementAndProperty.js";

function comp(parent) {
        let container = createElementAndProperty("div", parent, "container")
        let containerContent = createElementAndProperty("div", container, "contatinerContent")
        createElementAndProperty("img", containerContent)
        createElementAndProperty("h3", containerContent, undefined, "textContent", "Менеджер")
        let manager = createElementAndProperty("div", containerContent, "manager")
        createElementAndProperty("img", manager)
        createElementAndProperty("h3", manager, undefined, "textContent", "Ионов Оскар")
        createElementAndProperty("img", containerContent, "arrow")
        let content = createElementAndProperty("div", container, "underContent")
        return content
}


export function createPersonal() {
    let leftBlock = createElementAndProperty("div", document.body, "leftBlock")
    for(let currentS = 0; currentS < 2; currentS++) {
        let compS = comp(leftBlock)
        for(let currentA = 0; currentA < 2; currentA++) {
            comp(compS)
            for(let currentB = 0; currentB < 2; currentB++) {
                
            }
        }
    }
}