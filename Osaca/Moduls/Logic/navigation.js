import { creatersHTML } from "../HTMLCreater/HTMLCollector.js"

export const navigation = {
    siteStart: function() {
        creatersHTML.header()
        if(location.pathname == "/") {
            navigation.CallFunctGuidePathName(butMainSite.href)
        } else {
            // popstateFunctional()
        }
    },

    CallFunctGuidePathName: function(href) {
        let pathName = href.slice(location.origin.length + 1, href.length)
        if(pathName != history.state) {
            creatersHTML[pathName]()
        }
        history.pushState(`${pathName}`, "", href)
    },

    popstateFunctional: function() {
        document.body.lastChild.remove()
        creatersHTML[history.state]()
    }
}


