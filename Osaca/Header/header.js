import { createElementAndProperty } from "../shared/helper/CreateElementAndProperty.js"

export class Header extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.headerPanel()
        this.NavPanel() 
    }
    
    headerPanel() {
        let firstLineHeader = createElementAndProperty("div", this, "header_firstLine")
        this.mkCompanyLogo(firstLineHeader)
        this.mkAccountLogo(firstLineHeader)
    }

    mkCompanyLogo(firstLineHeader) {
        createElementAndProperty("img", firstLineHeader, undefined, "src", "https://img.freepik.com/free-vector/panda-bear-silhouette-logo-design-template-funny-lazy-animal-logotype-concept-icon_126523-622.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=sph")    
    }

    mkAccountLogo(firstLineHeader) {
        let logo = createElementAndProperty("a", firstLineHeader, "header_logo", ["id", "href"], ["but", "/profile"])
        this.mkAccountContent(logo)
    }

    mkAccountContent(logo) {
        let srcImgLogo = "https://muzei-mira.com/templates/museum/images/paint/pushkin-kiprenskii+.jpg"
        createElementAndProperty("img", logo, undefined, "src", `${srcImgLogo}`)
        createElementAndProperty("h3", logo, undefined, "textContent", "Войти")
    }

    NavPanel() {
        let secondLineHeader = createElementAndProperty("nav", this, "header_secondLine")
        this.mkNavButtons(secondLineHeader)
    }

    mkNavButtons(secondLineHeader) {
        let names = ["Персонал", "Главная", "Новости", "Задачи"]
        // let ids = ["Personal", "Main", "News", "Tasks"]
        let hrefs = ["personal", "/main", "/news", "/Tasks"]
        for(let current = 0; current < names.length; current++) {
            let button = createElementAndProperty("a", secondLineHeader, undefined, ["textContent", "id", "href"], [`${names[current]}`, `but`, `${hrefs[current]}`])
        }
    }
}



