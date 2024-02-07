
import { createElementAndProperty } from "../shared/helper/CreateElementAndProperty.js";
import { createHTMLBanner } from "../shared/components/banner/banner.js";
import { bannerLogic } from "../shared/components/banner/banner.js";
// import { packForPanel } from "../../../Logic/FunctionalPanel.js";

const ICONS = []

export class MainPage extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.assingHostClass()
        this.mkIntroduction()
        this.mkBanner()
        this.mkDisciption()
        this.mkCurrectTaskBar()  
    }

    assingHostClass() {
        this.classList.add("main_")
    }

    mkIntroduction() {
        createElementAndProperty('h2', this, "main_welcome", "textContent", "Добро пожаловать в Osaca Corp.")    
        createElementAndProperty('h3', this, "main_welcome_disc", "textContent", "Osaca Corp. занимается разработкой программного обеспечения, поддержкой малых и средних бизнесов. Консультированием и автоматиазацией бизнес процессов внутри компания")
    }

    mkBanner() {
        createElementAndProperty("app-banner", this)
    }

    mkDisciption() {
        createElementAndProperty("h2", this, "main_titleDisc", "textContent", "Наши преимущества")
        let discDiv = createElementAndProperty("div", this, "main_discDiv")
        for(let current = 0; current < 3; current++) {
            this.compDiscription(discDiv, current)
        }
    }

    compDiscription(whoAppend, current) {
        let block = createElementAndProperty("div", whoAppend, "main_discBlock")
        this.mkIconsDiscription(block, current)
        createElementAndProperty("p", block, undefined, "textContent", `вбыиф роиыф лов ыфивл рыфи ыви ыфи воыфи рворлыф ивор ыиво рофрывиф орвиыфо ррви ыив о врои ыфорв иыофлр иволрыфи волрыфи вори ыф ворфыи ворыфи ворыфи ворлыф иолыфр иворыф иворыф ивыф ыф олврыфи овлрифы олрви ыфолрв ио ирвфы`)
    }

    mkIconsDiscription(block, current) {
        const DIRECTORY_TO_ASSETS = "./../../../../assets/"
        const ICONS = [`${DIRECTORY_TO_ASSETS}disc1.png`, `${DIRECTORY_TO_ASSETS}disc2.png`, `${DIRECTORY_TO_ASSETS}disc3.png`]
        createElementAndProperty("img", block, undefined, "src", `${ICONS[current]}`)
    }


    mkCurrectTaskBar() {
        createElementAndProperty("h2", this, "main_currectTask", "textContent", "Текущая задача")
        console.log(createElementAndProperty("app-taskbar", this))
    }
}

    



