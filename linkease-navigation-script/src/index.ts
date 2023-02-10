import "./index.scss"
import { IconQQ, IconCopy, IconEmail, IconWechat, WehctaQrcode, QqQrcode } from "./assets"
class LinkeaseNavigation implements LinkeaseNavigationNamespace.LinkeaseNavigationClass {
    menus: LinkeaseNavigationNamespace.MenuType[] = []
    node: HTMLDivElement
    static getWehctaQrcode() {
        return WehctaQrcode
    }
    static getQqQrcode() {
        return QqQrcode
    }
    onHanldeCopy(e: Element) {
        if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
            const v = e.getAttribute("value")
            navigator.clipboard.writeText(`${v}`).then(() => {
                e.parentNode.parentElement.appendChild(this.createNavigatioToast("复制成功"))
            }).catch((error) => {
                e.parentNode.parentElement.appendChild(this.createNavigatioToast(`${error}`))
            })
        } else {
            e.parentNode.parentElement.appendChild(this.createNavigatioToast("当前环境不支持复制"))
        }
    }
    allButtonOnClick() {
        const btns = this.node.querySelectorAll("ul.navigation-item .navigation-item_dialog-email button.copy")
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", () => {
                this.onHanldeCopy(btns[i])
            })
        }
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
// 如果有该函,则使用该函数来触发注册事件,避免网络问题
if (window.initLinkeaseNavigationFunc) {
    window.initLinkeaseNavigationFunc()
}

const initLinkeaseNavigation = () => {
    let menus = []
    switch (location.host) {
        case "doc.linkease.com":
            menus = [
                {
                    icon: "qq",
                    title: "QQ交流群",
                    qrcode: QqQrcode,
                    email: "",
                    text: ""
                },
                {
                    icon: "wechat",
                    title: "微信交流群",
                    qrcode: "",
                    email: "",
                    text: "请在易有云app或DDNSTO控制台查看"
                },
                {
                    icon: "email",
                    title: "商务合作邮箱",
                    qrcode: "",
                    email: "admin@linkease.com",
                    text: ""
                }
            ]
            break
        case "app.linkease.com":
            menus = [
                {
                    icon: "qq",
                    title: "QQ交流群",
                    qrcode: QqQrcode,
                    email: "",
                    text: ""
                },
                {
                    icon: "wechat",
                    title: "付费用户微信交流群",
                    qrcode: "",
                    email: "",
                    text: "请在 控制台 - 玩家交流页查看二维码"
                },
                {
                    icon: "email",
                    title: "商务合作邮箱",
                    qrcode: "",
                    email: "admin@linkease.com",
                    text: ""
                }
            ]
            break
        case "www.linkease.com":
            menus = [
                {
                    icon: "qq",
                    title: "QQ交流群",
                    qrcode: QqQrcode,
                    email: "",
                    text: ""
                },
                {
                    icon: "wechat",
                    title: "付费用户微信交流群",
                    qrcode: "",
                    email: "",
                    text: "请打开易有云APP - “我的” - “联系我们”中查看二维码"
                },
                {
                    icon: "email",
                    title: "商务合作邮箱",
                    qrcode: "",
                    email: "admin@linkease.com",
                    text: ""
                }
            ]
            break
        case "www.ddnsto.com":
        case "www.tocmcc.cn":
        case "www.kooldns.cn":
            menus = [
                {
                    icon: "qq",
                    title: "QQ交流群",
                    qrcode: QqQrcode,
                    email: "",
                    text: ""
                },
                {
                    icon: "wechat",
                    title: "付费用户微信交流群",
                    qrcode: "",
                    email: "",
                    text: "请在 控制台 - 玩家交流页查看二维码"
                },
                {
                    icon: "email",
                    title: "商务合作邮箱",
                    qrcode: "",
                    email: "admin@linkease.com",
                    text: ""
                }
            ]
            break
        default:
            menus = [
                {
                    icon: "qq",
                    title: "QQ交流群",
                    qrcode: QqQrcode,
                    email: "",
                    text: ""
                },
                {
                    icon: "wechat",
                    title: "微信交流群",
                    qrcode: "",
                    email: "",
                    text: "请在易有云app或DDNSTO控制台查看"
                },
                {
                    icon: "email",
                    title: "商务合作邮箱",
                    qrcode: "",
                    email: "admin@linkease.com",
                    text: ""
                }
            ]
    }
    new LinkeaseNavigation({
        menus: menus
    })
}
initLinkeaseNavigation()
export default LinkeaseNavigation