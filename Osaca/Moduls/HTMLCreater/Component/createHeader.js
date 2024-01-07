import { createElementAndProperty } from "./HTMLHelper/CreateElementAndProperty.js"

export function createHeader() {
    let header = createElementAndProperty("div", document.body)
    let firstLineHeader = createElementAndProperty("div", header, "firstLine")
    createElementAndProperty("img", firstLineHeader, undefined, "src", "https://img.freepik.com/free-vector/panda-bear-silhouette-logo-design-template-funny-lazy-animal-logotype-concept-icon_126523-622.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=sph")
    let logo = createElementAndProperty("a", firstLineHeader, "logo", ["id", "href"], ["butProfile", "/profile"])
    let oo = createElementAndProperty("img", logo, undefined, "src", "https://muzei-mira.com/templates/museum/images/paint/pushkin-kiprenskii+.jpg")
    createElementAndProperty("h3", logo, undefined, "textContent", "Войти")
    let secondLineHeader = createElementAndProperty("nav", header, "secondLine")
    let names = ["Персонал", "Главная", "Новости", "Задачи"]
    let ids = ["Personal", "MainSite", "News", "Tasks"]
    let hrefs = ["personal", "/mainSite", "/news", "/Tasks"]
    for(let current = 0; current < names.length; current++) {
        let button = createElementAndProperty("a", secondLineHeader, undefined, ["textContent", "id", "href"], [`${names[current]}`, `but${ids[current]}`, `${hrefs[current]}`])
    }
    
} 
