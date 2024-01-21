
import { createElementAndProperty } from "./HTMLHelper/CreateElementAndProperty.js";

function compFirst(parent) {
        let container = createElementAndProperty("div", parent, "first_container")
        let panel = createElementAndProperty("div", container, "first_panel")
        let containerContent = createElementAndProperty("div", panel, "first_contatinerContent")
        createElementAndProperty("img", containerContent)
        createElementAndProperty("h3", containerContent, undefined, "textContent", "Менеджер")
        let manager = createElementAndProperty("div", containerContent, "first_manager")
        createElementAndProperty("img", manager)
        createElementAndProperty("h3", manager, undefined, "textContent", "Ионов Оскар")
        createElementAndProperty("img", containerContent, "arrow")
        let content = createElementAndProperty("div", container, "first_underContent")
        return content
}
function compSecond(parent) {
    let container = createElementAndProperty("div", parent, ["first_container", "second_container"])
        let panel = createElementAndProperty("div", container, "first_panel")
        let containerContent = createElementAndProperty("div", panel, "first_contatinerContent")
        createElementAndProperty("img", containerContent)
        createElementAndProperty("h3", containerContent, undefined, "textContent", "Менеджер")
        let manager = createElementAndProperty("div", containerContent, "first_manager")
        createElementAndProperty("img", manager)
        createElementAndProperty("h3", manager, undefined, "textContent", "Ионов Оскар")
        createElementAndProperty("img", containerContent, "arrow")
        let content = createElementAndProperty("div", container, "first_underContent")
        return content
}
function compThrid(parent) {
        let container = createElementAndProperty("div", parent, ["first_container", "third_container"])
        let panel = createElementAndProperty("div", container, "first_panel")
        let containerContent = createElementAndProperty("div", panel, "first_contatinerContent")
        createElementAndProperty("img", containerContent)
        createElementAndProperty("h3", containerContent, undefined, "textContent", "Менеджер")
        let manager = createElementAndProperty("div", containerContent, "first_manager")
        createElementAndProperty("img", manager)
        createElementAndProperty("h3", manager, undefined, "textContent", "Ионов Оскар")
        createElementAndProperty("img", containerContent, "arrow")
        let content = createElementAndProperty("div", container, "first_underContent")
}


export function createPersonal() {
    let leftBlock = createElementAndProperty("div", document.body, "leftBlock")
    for(let currentS = 0; currentS < 2; currentS++) {
        let compS = compFirst(leftBlock)
        for(let currentA = 0; currentA < 2; currentA++) {
        let secondComp =  compSecond(compS)
            for(let currentB = 0; currentB < 2; currentB++) {
                compThrid(secondComp)
            }
        }
    }
}