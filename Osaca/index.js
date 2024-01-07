
import { navigation } from "./Moduls/Logic/navigation.js"
import { linkCSS } from "./Moduls/Logic/linCSS.js"
let linkHref = ["header", "ALL", "profil", "news", "mainSite", "personal", "createAccount", "taskBar"]
linkCSS(linkHref)
import { createAccountWindows } from "./Moduls/HTMLCreater/Windows/CreateAccount.js"

document.addEventListener("click", function(event) {
    event.preventDefault()
})
navigation.siteStart()

// butProfile.addEventListener("click", function() {
//     createAccountWindows()
//     console.log(logo)
// })

window.addEventListener("popstate", navigation.popstateFunctional)

butProfile.addEventListener("click", function() {
    document.body.lastChild.remove()
    navigation.CallFunctGuidePathName(butProfile.href)
})
butMainSite.addEventListener("click", function() {
    document.body.lastChild.remove()
    navigation.CallFunctGuidePathName(butMainSite.href)
})
butNews.addEventListener("click", function() {
    document.body.lastChild.remove()
    navigation.CallFunctGuidePathName(butNews.href)
})
butTasks.addEventListener("click", function() {
    document.body.lastChild.remove()
    navigation.CallFunctGuidePathName(butTasks.href)
})
butPersonal.addEventListener("click", function() {
    document.body.lastChild.remove()
    navigation.CallFunctGuidePathName(butPersonal.href)
})
console.log(butTasks)