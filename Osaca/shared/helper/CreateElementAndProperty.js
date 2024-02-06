
export function createElementAndProperty(type, whoAppend, addClass, attribute, value) {
    let element = createElement(type) 
    appendChild(whoAppend, element)
    addClassToElement(addClass, element)
    addAttributeAndValue(attribute, value, element)
    return element
}

function createElement(type) {
    let element = document.createElement(`${type}`)
    return element
}

function appendChild(whoAppend, element) {
    whoAppend.appendChild(element)
}

function addClassToElement(addClass, element) {
    if(addClass != undefined) {
        if(typeof addClass == "object") {
            for(let current = 0; current < addClass.length; current++) {
                element.classList.add(`${addClass[current]}`)
            }
        } else {
            element.classList.add(`${addClass}`)
        }
    }
}

function addAttributeAndValue(attribute, value, element) {
    if(attribute != undefined) {
        if(typeof attribute == "object") {
            for(let current = 0; current < attribute.length; current++) {
                element[attribute[current]] = value[current]
            }
        }   else {
                element[attribute] = value
            }
    }
}
