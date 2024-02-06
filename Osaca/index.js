
import { Header } from "./Header/header.js"
import { MainPage } from "./Main/main.js"
import { News } from "./News/news.js"
import { Personal } from "./Pesonal/personal.js"
import { Profile } from "./Profile/profile.js"

import { TaskBar } from "./shared/components/taskBar/taskBar.js"

import { navigation } from "./shared/logic/navigation.js"

customElements.define("app-header", Header)
customElements.define("app-main", MainPage)
customElements.define("app-news", News)
customElements.define("app-profile", Profile)
customElements.define("app-personal", Personal)
customElements.define("app-taskbar", TaskBar)

navigation.siteStart()


document.addEventListener("click", event => {
    event.preventDefault()
    if(event.target.id == "but") {
        document.body.lastChild.remove()
        navigation.generateSite(event.target.href)
    }
})

window.addEventListener("popstate", navigation.popstateFunctional)