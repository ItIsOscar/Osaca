
export function createElementAndProperty(type, whoAppend, addClass, whichAttribute, attribute) {
    let element = document.createElement(`${type}`)
    whoAppend.appendChild(element)
    if(addClass != undefined) {
        if(typeof addClass == "object") {
            for(let current = 0; current < addClass.length; current++) {
                element.classList.add(`${addClass[current]}`)
            }
        } else {
            element.classList.add(`${addClass}`)
        }
    }
    if(whichAttribute != undefined) {
        if(typeof whichAttribute == "object") {
            for(let current = 0; current < whichAttribute.length; current++) {
                element[whichAttribute[current]] = attribute[current]
            }
        }   else {
                element[whichAttribute] = attribute
            }
    }
    return element
}