import { createHeader } from "./Component/createHeader.js";
import { createPersonal } from "./Component/createPersonal.js";
import { createProfile } from "./Component/createProfile.js";
import { createMainS } from "./Component/CreateMainS.js";
import { createNews } from "./Component/createNews.js";
import { createTasksSite } from "./Component/createTasksSite.js";


export const creatersHTML = {
    header: createHeader,
    profile: createProfile, 
    personal: createPersonal, 
    mainSite: createMainS, 
    news: createNews,
    Tasks: createTasksSite,
}