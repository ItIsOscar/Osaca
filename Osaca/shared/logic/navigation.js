
import { createElementAndProperty } from "../helper/CreateElementAndProperty.js"


export const navigation = {
    siteStart: function() {   
        createElementAndProperty("app-header", document.body)
        if(location.pathname == "/") {
            history.pushState("main", null, "main")
            createElementAndProperty("app-main", document.body)
        } else {
            // popstateFunctional()
        }
    },

    generateSite(href) {
        console.log("первоисточник:", href)
        let pathName = href.slice(location.origin.length + 1, href.length)
        console.log("путь:",pathName)
        history.pushState(`${pathName}`, null, href)
        createElementAndProperty(`app-${pathName}`, document.body)
    },

    popstateFunctional: function() {
        document.body.lastChild.remove()
        createElementAndProperty(`app-${history.state}`, document.body)
    }
}


