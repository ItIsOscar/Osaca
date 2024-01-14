
import { createElementAndProperty } from "./HTMLHelper/CreateElementAndProperty.js"

let textForDesc = "Фронтенд разработка с нуляя до продакшена. Использую современные технологии. Здесь Вы можете ознакомиться с работами"

export function createProfile() {
    let main = createElementAndProperty("div", document.body, "profile_")
    let firtBlock = createElementAndProperty("div", main, "profile_firstBlock")
    createElementAndProperty("img", firtBlock)
    let description = createElementAndProperty("div", firtBlock, "profile_description")
    createElementAndProperty("h3", description, undefined, "textContent", "Ионов Оскар")
    createElementAndProperty("p", description, undefined, "textContent", `${textForDesc}`)
    let about = createElementAndProperty("div", main, "profile_aboutYou")
    let className = ["profile_firstBut", "profile_secondBut", "profile_thirdBut"]
    for(let current = 0; current < className.length; current++) {
        createElementAndProperty("button", about, [`${className[current]}`, "profile_but"], "textContent", `${className[current]}`)
    }
}