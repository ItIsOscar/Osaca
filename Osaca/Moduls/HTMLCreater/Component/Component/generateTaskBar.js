import { createElementAndProperty } from "../HTMLHelper/CreateElementAndProperty.js"
import { packForPanel } from "../../../Logic/FunctionalPanel.js"

function reapet(parent) {
    let taskTask = createElementAndProperty("div", parent, "TB_taskTask")
    createElementAndProperty("h4", taskTask, undefined, "textContent", "Посмотреть состав над этой задачей")
    let taskTaskSub = createElementAndProperty("div", taskTask, "TB_taskTaskSub")
    createElementAndProperty("button", taskTaskSub, undefined, "textContent", "Сотрудники")
    createElementAndProperty("button", taskTaskSub, undefined, "textContent", "Отделы")
}



export function generateTaskBar(content) {
    let taskDiv = createElementAndProperty("div", content, "TB_taskDiv")
    let taskName = createElementAndProperty("button", taskDiv, "TB_taskName")
    createElementAndProperty("h3", taskName, undefined, "textContent", "Создание сайта")
    createElementAndProperty("h4", taskName, undefined, "textContent", "Разработка дизайна, создание верстки и логики")
    let taskContent = new packForPanel.Window(createElementAndProperty("div", taskDiv, "TB_TaskContent"))   
    taskContent.isOpen = false
    taskContent.divElement.style.display = "none"
    reapet(taskContent.divElement)
    reapet(taskContent.divElement)
    const logicIngridient = {taskName, taskContent}
    return logicIngridient
}

