
export const packForPanel = {
    Window: class {
        isOpen = false
        constructor(divElement) {
            this.divElement = divElement
        }
    },
    
    closeOrOpenPanel: function (div) {
        if(div.isOpen == true) {
            div.divElement.style.display = "none"
            div.isOpen = false
        } else {
            div.divElement.style.display = "block"
            div.isOpen = true
        }
    }
}