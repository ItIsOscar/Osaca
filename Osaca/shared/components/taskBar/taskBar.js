import { createElementAndProperty } from "../../helper/CreateElementAndProperty.js"
import { packForPanel } from "../../logic/FunctionalPanel.js"

export class TaskBar extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        console.log("skjdasd")
        let Element = createElementAndProperty("div", this, "TB_taskDiv")
        this.mkPartName(Element)
        this.mkElExtraContent(Element)
        // const logicIngridient = {taskName, taskContent}
        // return logicIngridient
    }

    mkPartName(Element) {
        let ElTitle = createElementAndProperty("button", Element, "TB_taskName")
        createElementAndProperty("h3", ElTitle, undefined, "textContent", "Создание сайта")
        createElementAndProperty("h4", ElTitle, undefined, "textContent", "Разработка дизайна, создание верстки и логики")
        
    }

    mkElExtraContent(Element) {
        let taskContent = new packForPanel.Window(createElementAndProperty("div", Element, "TB_TaskContent"))   
        this.assingProperty(taskContent)
        this.mkElExtraInfo(taskContent.divElement)
    }

    assingProperty(taskContent) {
        taskContent.isOpen = false
        taskContent.divElement.style.display = "none"
    }

    mkElExtraInfo(taskContent) {
        let extraInfo = createElementAndProperty("div", taskContent, "TB_taskTask")
        this.mkTitleWorkingcompound(extraInfo)
        this.mkWorkingcompound(extraInfo)
        this.mkTitleSubCompound(extraInfo)
        this.mkSubTaskCompound(extraInfo)
    }

    mkTitleWorkingcompound(extraInfo) {
        createElementAndProperty("h4", extraInfo, undefined, "textContent", "Посмотреть состав над этой задачей:")
    }

    mkWorkingcompound(extraInfo) { 
        let workingcompound = createElementAndProperty("div", extraInfo, "TB_taskTaskSub")
        createElementAndProperty("button", workingcompound, undefined, "textContent", "Сотрудники")
        createElementAndProperty("button", workingcompound, undefined, "textContent", "Отделы")
    }

    mkTitleSubCompound(extraInfo) {
        createElementAndProperty("h4", extraInfo, undefined, "textContent", "Посмотреть подзадачи:")
    }

    mkSubTaskCompound(workingcompound) {
        let Taskcompound = createElementAndProperty("div", workingcompound, "TB_taskTaskSub")
        createElementAndProperty("button", workingcompound, undefined, "textContent", "Сотрудники")
        createElementAndProperty("button", workingcompound, undefined, "textContent", "Отделы")
    }
}

