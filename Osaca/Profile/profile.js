
import { createElementAndProperty } from "../shared/helper/CreateElementAndProperty.js"

export class Profile extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        createElementAndProperty("div", document.body)
        let content = createElementAndProperty("div", this, "profile_")
        this.mkAboutUser(content)
        this.mkAdditionalFeatures(content)
    }

    mkAboutUser(content) {
        let aboutUser = createElementAndProperty("div", content, "profile_aboutUser")
        this.mkUserImg(aboutUser)
        this.mkDescUser(aboutUser)
    }
    
    mkUserImg(aboutUser) {
        let srcImgUser = "https://www.vokrug.tv/pic/product/d/a/1/4/da1488e8bc9f8c0a461f8c943bbd1f41.jpg"
        createElementAndProperty("img", aboutUser, undefined, "src", `${srcImgUser}`)
    }

    mkDescUser(aboutUser) {
        let description = createElementAndProperty("div", aboutUser, "profile_description")
        this.mkNameUser(description)        
        this.mkTextForDisc(description)
    }

    mkNameUser(description) {
        let nameUser = "Ионов Оскар"
        createElementAndProperty("h3", description, undefined, "textContent", `${nameUser}`)
    }

    mkTextForDisc(description) {
        let textForDesc = "Фронтенд разработка с нуляя до продакшена. Использую современные технологии. Здесь Вы можете ознакомиться с работами"
        createElementAndProperty("p", description, undefined, "textContent", `${textForDesc}`)
    }

    mkAdditionalFeatures(content) {
        let additionalFeatures = createElementAndProperty("div", content, "profile_additionalFeatures")
        this.mkButtons(additionalFeatures)
    }

    mkButtons(additionalFeatures) {
        let className = ["profile_firstBut", "profile_secondBut", "profile_thirdBut"]
        for(let current = 0; current < className.length; current++) {
            createElementAndProperty("button", additionalFeatures, [`${className[current]}`, "profile_but"], "textContent", `${className[current]}`)
        }
    }  
}
