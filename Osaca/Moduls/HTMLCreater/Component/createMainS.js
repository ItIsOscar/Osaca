
import { createElementAndProperty } from "./HTMLHelper/CreateElementAndProperty.js";
import { createHTMLBanner } from "./Component/bannerLogic.js";
import { bannerLogic } from "./Component/bannerLogic.js";
import { generateTaskBar } from "./Component/generateTaskBar.js";
import { packForPanel } from "../../Logic/FunctionalPanel.js";





function compDiscription(whoAppend,) {
    let block = createElementAndProperty("div", whoAppend, "main_discBlock")
    createElementAndProperty("img", block, undefined, "", ``)
    createElementAndProperty("p", block, undefined, "textContent", `вбыиф роиыф лов ыфивл рыфи ыви ыфи воыфи рворлыф ивор ыиво рофрывиф орвиыфо ррви ыив о врои ыфорв иыофлр иволрыфи волрыфи вори ыф ворфыи ворыфи ворыфи ворлыф иолыфр иворыф иворыф ивыф ыф олврыфи овлрифы олрви ыфолрв ио ирвфы`)
}

export function createMainS() {
    let content = createElementAndProperty("div", document.body, "contentMain")
    createElementAndProperty('h2', content, "welcome", "textContent", "Добро пожаловать в Osaca Corp.")
    let result = createHTMLBanner(content)
    setTimeout(bannerLogic(result.blockPages, result.banner), 5000)
    createElementAndProperty("h2", content, undefined, "textContent", "Наши преимущества")
    let discDiv = createElementAndProperty("div", content, "main_discDiv")
    for(let current = 0; current < 3; current++) {
        compDiscription(discDiv)
    }
    createElementAndProperty("h2", content, "main_currectTask", "textContent", "Текущая задача")
    let logicIngridient = generateTaskBar(content)
    console.log(logicIngridient)
    logicIngridient.taskName.addEventListener("click", function() {
        packForPanel.closeOrOpenPanel(logicIngridient.taskContent)
        logicIngridient.taskName.classList.toggle("main_taskNameIsOpen")
    })
    
}
    



