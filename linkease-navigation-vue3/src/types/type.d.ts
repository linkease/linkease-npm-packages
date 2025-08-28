declare type MenusIcon = "qq" | "wechat" | "email" | "top" | "kf" | "feedback" | "live"
declare interface MenuItem {
    icon?: MenusIcon,
    title?: string,
    description?: string,
    qrcode?: string,
    email?: string,
    text?: string,
    isWechatAndQq?: boolean
    // 是否有意见反馈
    isFeedback?: boolean
    // 意见反馈目标链接
    feedbackTarget?: string
    liveQrcode?: string
}