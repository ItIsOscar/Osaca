
import { createElementAndProperty } from "../shared/helper/CreateElementAndProperty.js";
import { packForPanel } from "../shared/logic/FunctionalPanel.js";

function compFirst(parent) {
        let container = createElementAndProperty("div", parent, "first_container")
        let panel = createElementAndProperty("button", container, "first_panel") 
        let containerContent = createElementAndProperty("div", panel, "first_contatinerContent")
        createElementAndProperty("img", containerContent)
        createElementAndProperty("h3", containerContent, undefined, "textContent", "Менеджер")
        let manager = createElementAndProperty("div", containerContent, "first_manager")
        createElementAndProperty("img", manager)
        createElementAndProperty("h3", manager, undefined, "textContent", "Ионов Оскар")
        createElementAndProperty("img", containerContent, "arrow")
        let content = new packForPanel.Window(createElementAndProperty("div", container, "first_underContent"))
        console.log(content.isOpen)
        addEventListener("click", function() {
            console.log(content.isOpen)
            packForPanel.closeOrOpenPanel(content)
        })
        return content.divElement
}
function compSecond(parent) {
        let container = createElementAndProperty("div", parent, ["first_container", "second_container"])
        let panel = createElementAndProperty("div", container, "first_panel")
        let containerContent = createElementAndProperty("div", panel, "first_contatinerContent")
        createElementAndProperty("img", containerContent)
        createElementAndProperty("h3", containerContent, undefined, "textContent", "Менеджер")
        let manager = createElementAndProperty("div", containerContent, "first_manager")
        createElementAndProperty("img", manager)
        createElementAndProperty("h3", manager, undefined, "textContent", "Ионов Оскар")
        createElementAndProperty("img", containerContent, "arrow")
        let content = createElementAndProperty("div", container, "first_underContent")
        return content
}
function compThrid(parent) {
        let container = createElementAndProperty("div", parent, ["first_container", "third_container"])
        let panel = createElementAndProperty("div", container, "first_panel")
        let containerContent = createElementAndProperty("div", panel, "first_contatinerContent")
        createElementAndProperty("img", containerContent)
        createElementAndProperty("h3", containerContent, undefined, "textContent", "Менеджер")
        let manager = createElementAndProperty("div", containerContent, "first_manager")
        createElementAndProperty("img", manager)
        createElementAndProperty("h3", manager, undefined, "textContent", "Ионов Оскар")
        createElementAndProperty("img", containerContent, "arrow")
        let content = createElementAndProperty("div", container, "first_underContent")
}


function createPersonal() {
    let leftBlock = createElementAndProperty("div", document.body, "leftBlock")
    for(let currentS = 0; currentS < 2; currentS++) {
        let compS = compFirst(leftBlock)
        for(let currentA = 0; currentA < 2; currentA++) {
        let secondComp = compSecond(compS)
            for(let currentB = 0; currentB < 2; currentB++) {
                compThrid(secondComp)
            }
        }
    }
}

export class Personal extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.mkListOfEmployers()
        // createPersonal()
    }

    mkListOfEmployers() {
        let listOfEmployers = createElementAndProperty("div", this, "personal_leftBlock")

        for(let currentS = 0; currentS < 2; currentS++) {
            let manager = this.mkEmployee(listOfEmployers, "personal_managePost")
            for(let currentA = 0; currentA < 2; currentA++) {
            let subManager = this.mkEmployee(manager.divElement, "personal_subManagePost")
                for(let currentB = 0; currentB < 2; currentB++) {
                    this.mkEmployee(subManager.divElement, "personal_workerPost")
                }
            }
        }
    }

    mkEmployee(listOfEmployers, panelPost) {
        let container = createElementAndProperty("div", listOfEmployers, "first_container")
        this.mkPanelContent(container, panelPost)
        let underContent =  this.mkUnderContent(container)
        return underContent
    }

    mkPanelContent(container, panelPost) {
        let panel = createElementAndProperty("button", container, ["personal_panel", `${panelPost}`]) 
        this.mkPanelPost(panel)
        this.mkManagerCard(panel)
        this.mkArrow(panel)
    }

    mkPanelPost(panel) {
        let post = createElementAndProperty("div", panel, "personal_PanelPost")
        this.mkPostIcon(post)
        this.mkCurrentPost(post)
    }

    mkPostIcon(post) {
        createElementAndProperty("img", post)
    }

    mkCurrentPost(post) {
        createElementAndProperty("h3", post, undefined, "textContent", "Менеджер")
    }

    mkManagerCard(panel) {
        let manager = createElementAndProperty("div", panel, "personal_manager")
        this.mkManagerLogo(manager)
        this.mkManagerName(manager) 
    }

    mkManagerLogo(manager) {
        createElementAndProperty("img", manager)
    }

    mkManagerName(manager) {
        createElementAndProperty("h3", manager, undefined, "textContent", "Ионов Оскар")
    }

    mkArrow(panel) {
        createElementAndProperty("img", panel, "personal_arrow")
    }

    mkUnderContent(container) {
        let content = new packForPanel.Window(createElementAndProperty("div", container, "first_underContent"))
        addEventListener("click", function() {
            packForPanel.closeOrOpenPanel(content)
        })
        return content
    }
}