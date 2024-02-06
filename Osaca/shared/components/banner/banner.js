import { createElementAndProperty } from "../../helper/CreateElementAndProperty.js"

export function  createHTMLBanner(content) {
    class BannerPage {
        constructor(divElement) {
            this.divElement = divElement
        }
        currentPage = 1
    }
    let banner =  new BannerPage(createElementAndProperty("div", content, 'banner_')) 
    let bannerContent = createElementAndProperty("div", banner.divElement, "banner_visiblePart")
    let pic = ["https://print4you.com.ua/upload/resize_cache/iblock/a6c/444_480_1/a6c91a8d37cd6f789f0eb84053661b3b.jpg", "https://artsalon.biz/wp-content/uploads/abstract-print-art-painting-60x90-cm.webp", "https://art-kvartira.ru/wp-content/uploads/2023/03/alko30x50.jpg"]
    for(let current = 0; current < pic.length; current++) {
        let block = createElementAndProperty("div", bannerContent, "banner_pageContent", "id", `block${current + 1}`)
        createElementAndProperty("img", block, undefined, 'src', `${pic[current]}`)
        let blockText = createElementAndProperty("div", block, "banner_text")
        createElementAndProperty("h3", blockText, undefined, "textContent", "Спокойный канеки")
        createElementAndProperty("p", blockText, undefined, "textContent", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua")
    }
    let blockPages = [block1, block2, block3]
    let result = {
        blockPages,
        banner
    }
    return result
}

export function bannerLogic(bannerBlocks, banner) { 
    if(banner.currentPage == bannerBlocks.length ) {
        banner.currentPage = 1
    } else {
        banner.currentPage++
    }
    bannerBlocks[banner.currentPage - 1].scrollIntoView({
        inline: "center",
        behavior: "smooth",
    })
    console.log(banner.currentPage)
}