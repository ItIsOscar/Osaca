
import { createElementAndProperty } from "./HTMLHelper/CreateElementAndProperty.js"

let textForDesc = "Фронтенд разработка с нуляя до продакшена. Использую современные технологии. Здесь Вы можете ознакомиться с работами"

export function createProfile() {
    let main = createElementAndProperty("div", document.body, "main")
    let firtBlock = createElementAndProperty("div", main, "firstBlock")
    createElementAndProperty("img", firtBlock)
    let description = createElementAndProperty("div", firtBlock, "description")
    createElementAndProperty("h3", description, undefined, "textContent", "Ионов Оскар")
    createElementAndProperty("p", description, undefined, "textContent", `${textForDesc}`)
    let about = createElementAndProperty("div", main, "aboutYou")
    let className = ["firstBut", "secondBut", "thirdBut"]
    for(let current = 0; current < className.length; current++) {
        createElementAndProperty("button", about, [`${className[current]}`, "but"], "textContent", `${className[current]}`)
    }
}