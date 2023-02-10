import "./index.scss"
import { IconQQ, IconCopy, IconEmail, IconWechat } from "./assets"
class LinkeaseNavigation implements LinkeaseNavigationNamespace.LinkeaseNavigationClass {
    menus: LinkeaseNavigationNamespace.MenuType[] = []
    node: HTMLDivElement
    static getWehctaQrcode() {
        return "https://assets.koolcenter.com/linkease/linkease_wechat_qrcode.png"
    }
    static getQqQrcode() {
        return "https://assets.koolcenter.com/linkease/linkease_qq_qrcode.png"
    }
    onHanldeCopy(e: HTMLElement) {
        const v = e.getAttribute("value")
        navigator.clipboard.writeText(`${v}`).then(() => {
            e.parentNode.parentElement.appendChild(this.createNavigatioToast("复制成功"))

        }).catch((error) => {
            e.parentNode.parentElement.appendChild(this.createNavigatioToast(`${error}`))
        })
    }
    allButtonOnClick() {
        const btns = this.node.querySelectorAll("ul.navigation-item .navigation-item_dialog-email button.copy")
        btns.forEach(item => {
            const e = item as HTMLElement
            e.onclick = () => {
                this.onHanldeCopy(e)
            }
        })
    }
    createNavigatioToast(value?: string) {
        if (!value) {
            return
        }
        const el = document.createElement("div")
        el.className = "navigation-item_dialog-msg"
        el.innerText = value
        setTimeout(() => {
            el.remove()
        }, 2000)
        return el
    }
    createNavigationMenu(menu: LinkeaseNavigationNamespace.MenuType) {
        const getDialogQrocdeHTML = () => {
            if (menu.qrcode) {
                return `
                <div class="navigation-item_dialog-qrcode">
                    <img lazyload="auto" src="${menu.qrcode}" alt="">
                </div>
            `
            } else {
                return ""
            }
        }
        const getDialogEmailHTML = () => {
            if (menu.email) {
                return `
                <div class="navigation-item_dialog-email">
                    <a href="mailto:${menu.email}" target="_blank">${menu.email}</a>
                   <button class="copy" value="${menu.email}">
                    <img lazyload="auto" src="${IconCopy}">
                   </button>
                </div>
            `
            } else {
                return ""
            }
        }
        const getDialogTextHTML = () => {
            if (menu.text) {
                return `
                <div class="navigation-item_dialog-text">
                    ${menu.text}
                    </div>
                `
            } else {
                return ""
            }
        }
        const getIconHTML = () => {
            let icon = menu.icon || ""
            switch (menu.icon) {
                case "qq":
                    icon = IconQQ
                    break
                case "email":
                    icon = IconEmail
                    break
                case "wechat":
                case "wx":
                case "weixin":
                    icon = IconWechat
                    break
            }
            return `
                 <div class="navigation-item_icon">
                    <img lazyload="auto" src="${icon}">
                </div>
            `
        }
        const getTitleHTML = () => {
            return `<div class="navigation-item_dialog-title">${menu.title}</div>`
        }
        return `
            <ul class="navigation-item">
               ${getIconHTML()}
                <div class="navigation-item_dialog">
                    <div class="navigation-item_dialog-content">
                        ${getTitleHTML()}
                        ${getDialogQrocdeHTML()}
                        ${getDialogEmailHTML()}
                        ${getDialogTextHTML()}
                    </div>
                    <div class="navigation-item_dialog-transparent"></div>
                </div>
            </ul>
        `
    }
    createNavigationMenus(menus: LinkeaseNavigationNamespace.MenuType[]) {
        let html = menus.map(item => {
            return this.createNavigationMenu(item)
        })
        return html.join("")
    }
    createNavigationContainler(menus: LinkeaseNavigationNamespace.MenuType[]) {
        this.node = document.createElement("div")
        this.node.className = "navigation-container"
        this.node.setAttribute("data-v-04bd1545", "")
        this.node.innerHTML = this.createNavigationMenus(this.menus)
        document.body.appendChild(this.node)
        this.allButtonOnClick()
    }
    createNavigation = () => {
        const menus = this.menus
        if (!menus || menus.length == 0) {
            return
        }
        if (window) {
            if (document.body) {
                this.createNavigationContainler(menus)
            } else {
                window.addEventListener('load', (event) => {
                    this.createNavigationContainler(menus)
                })
            }

        }
    }
    setMenus(menus: LinkeaseNavigationNamespace.MenuType[]) {
        this.menus = menus
        this.node.innerHTML = this.createNavigationMenus(this.menus)
        this.allButtonOnClick()
    }
    getWindowLinkeaseNavigationMenus() {
        if (window.getWindowLinkeaseNavigationMenus) {
            return window.getWindowLinkeaseNavigationMenus()
        }
        return []
    }
    constructor(obj: LinkeaseNavigationProps) {
        if (obj) {
            if (obj.menus && obj.menus.length > 0) {
                this.menus.push(...obj.menus)
            }
        }
        const value = this.getWindowLinkeaseNavigationMenus()
        if (value) {
            this.menus.push(...value)
        }
        this.createNavigation()
    }
}
window.NewLinkeaseNavigation = (obj: LinkeaseNavigationProps) => {
    return new LinkeaseNavigation(obj)
}
export default LinkeaseNavigation