
import { createElementAndProperty } from "../Component/HTMLHelper/CreateElementAndProperty.js";

export function createAccountWindows() {
    let background = createElementAndProperty("div", document.body, "accWin_background")
    let window = createElementAndProperty("div", background, "accWin_window")
    let firstName = createElementAndProperty("input", window, "type", "text")
    let passowrd = createElementAndProperty("input", window, "type", "text")
}