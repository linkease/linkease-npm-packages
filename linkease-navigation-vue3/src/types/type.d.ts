declare type MenusIcon = "qq" | "wechat" | "email" | "top" | "kf" | "live"
declare interface MenuItem {
    icon?: MenusIcon,
    title?: string,
    description?: string,
    qrcode?: string,
    email?: string,
    text?: string,
    isWechatAndQq?: boolean
}